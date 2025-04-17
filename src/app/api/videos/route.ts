import { NextResponse } from 'next/server';
import { S3Client, ListObjectsV2Command, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

/**
 * Fetches videos from an S3 bucket with a given prefix and returns their names and signed URLs.
 * @param prefix The prefix to filter S3 objects (e.g., 'mp4/Videos/' or empty for all files).
 * @returns An array of objects containing video names and URLs.
 */
async function fetchVideosFromPrefix(prefix: string): Promise<{ name: string; url: string }[]> {
  const videoData: { name: string; url: string }[] = [];
  let isTruncated = true;
  let continuationToken: string | undefined;

  while (isTruncated) {
    const command = new ListObjectsV2Command({
      Bucket: process.env.AWS_S3_BUCKET_NAME,
      Prefix: prefix,
      ContinuationToken: continuationToken,
    });
    const data = await s3Client.send(command);
    console.log(`S3 Response Contents for prefix "${prefix}":`, data.Contents);

    const videoItems = data.Contents?.filter((item) => item.Key?.endsWith('.mp4')) || [];

    for (const item of videoItems) {
      const videoKey = item.Key!;
      // Extract video name, removing '.mp4' and replacing underscores with spaces
      const videoName = videoKey
        .split('/')
        .pop()!
        .replace('.mp4', '')
        .replace(/_/g, ' ') || 'Unnamed Video';
      console.log('Found video:', videoKey, 'Name:', videoName);

      const getCommand = new GetObjectCommand({
        Bucket: process.env.AWS_S3_BUCKET_NAME,
        Key: videoKey,
      });
      const signedUrl = await getSignedUrl(s3Client, getCommand, { expiresIn: 3600 });

      videoData.push({ name: videoName, url: signedUrl });
    }

    isTruncated = data.IsTruncated || false;
    continuationToken = data.NextContinuationToken;
  }

  return videoData;
}

/**
 * GET endpoint to fetch video data from S3, returning names and signed URLs.
 * Attempts specific prefixes first, then falls back to all MP4 files in the bucket.
 */
export async function GET() {
  try {
    if (
      !process.env.AWS_ACCESS_KEY_ID ||
      !process.env.AWS_SECRET_ACCESS_KEY ||
      !process.env.AWS_REGION ||
      !process.env.AWS_S3_BUCKET_NAME
    ) {
      throw new Error('Missing required AWS environment variables');
    }
    console.log('Fetching Videos...');
    console.log('Bucket:', process.env.AWS_S3_BUCKET_NAME, 'Region:', process.env.AWS_REGION);

    // Try 'mp4/Videos/' first
    let videoData = await fetchVideosFromPrefix('mp4/Videos/');

    // If no videos found, try 'mp4/videos/'
    if (videoData.length === 0) {
      console.log('No videos found in mp4/Videos/, trying mp4/videos/...');
      videoData = await fetchVideosFromPrefix('mp4/videos/');
    }

    // If still no videos found, fetch all MP4 files from the bucket
    if (videoData.length === 0) {
      console.log('No videos found in mp4/videos/, fetching all MP4 files from the bucket...');
      videoData = await fetchVideosFromPrefix('');
    }

    console.log('Full list of videos:', videoData);
    return NextResponse.json(videoData);
  } catch (error: any) {
    console.error('Error fetching videos:', error.message || error);
    return NextResponse.json(
      { error: 'Failed to fetch videos', details: error.message || 'Unknown error' },
      { status: 500 }
    );
  }
}