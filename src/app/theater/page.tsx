import { Flex, Heading } from '@/once-ui/components';
import VideoPlayerClient from '@/components/VideoPlayerClient'; // Adjust the import path
import axios from 'axios';

async function getVideos() {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  if (!baseURL) {
    throw new Error('NEXT_PUBLIC_BASE_URL is not defined in environment variables');
  }
  try {
    console.log('Attempting to fetch videos from /api/videos');
    const response = await axios.get(`${baseURL}/api/videos`);
    console.log('API response status:', response.status);
    console.log('Videos fetched successfully:');
    return response.data; // Axios automatically parses the JSON response
  } catch (error) {
    throw new Error(`Failed to fetch videos: ${error.message}`);
  }
}

export default async function TheaterPage() {
  let content;
  try {
    const videos = await getVideos();
    content = <VideoPlayerClient videos={videos} />;
  } catch (error) {
    console.error('Error loading videos:', error);
    content = <div>Failed to load videos. Please try again later.</div>;
  }

  return (
    <Flex direction="column" gap="xl" padding="l" maxWidth="m" horizontal="center">
      <Heading variant="display-strong-l">Theater</Heading>
      {content}
    </Flex>
  );
}

export async function generateMetadata() {
  const title = 'Theater';
  const description = 'Personal Video Hosting, for friends!';
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${baseURL}/theater`,
      images: [{ url: `${baseURL}/og?title=${encodeURIComponent(title)}`, alt: title }],
    },
  };
}