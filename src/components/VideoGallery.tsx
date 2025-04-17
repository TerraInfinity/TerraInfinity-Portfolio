'use client';
import React from 'react';
import { Flex } from '@/once-ui/components';

interface VideoGalleryProps {
  videos: string[];
}

export default function VideoGallery({ videos }: VideoGalleryProps) {
  return (
    <Flex
      gap="m"
      style={{
        width: "100%",
        justifyContent: "center",
        flexWrap: "wrap"
      }}
    >
      {videos.map((url, index) => (
        <video
          key={url} // Use URL as key if unique; otherwise, stick with index
          src={url}
          controls
          style={{
            maxWidth: '400px', // Consistent size
            width: '100%',     // Responsive
            aspectRatio: '16/9', // Maintain aspect ratio
            margin: '10px'     // Spacing
          }}
          onError={() => console.log(`Failed to load video: ${url}`)} // Basic error logging
        />
      ))}
    </Flex>
  );
}