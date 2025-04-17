'use client';

import { useState, useEffect } from 'react';
import VideoJS from 'video.js';
import 'video.js/dist/video-js.css'; // Video.js styles
import styles from '@/components/VideoPlayerClient.module.scss';
import { Flex, Heading, Card, Scroller, Button } from '@/once-ui/components';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useRef } from 'react';

interface VideoData {
    name: string;
    url: string;
}

interface VideoPlayerClientProps {
    videos: VideoData[];
}

export default function VideoPlayerClient({ videos }: VideoPlayerClientProps) {
    const [selectedVideo, setSelectedVideo] = useState<VideoData | null>(null);
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
    const playerRef = useRef<any>(null); // Ref for Video.js player
    const videoRef = useRef<HTMLVideoElement>(null);

    // Initialize Video.js player
    useEffect(() => {
        if (videoRef.current && selectedVideo) {
            const player = VideoJS(videoRef.current, {
                controls: true,
                responsive: true,
                fluid: true,
                sources: [{ src: selectedVideo.url, type: 'video/mp4' }], // Adjust type based on video format
                controlBar: {
                    volumePanel: { inline: false },
                    fullscreenToggle: true,
                },
            });

            playerRef.current = player;

            return () => {
                if (playerRef.current) {
                    playerRef.current.dispose();
                }
            };
        }
    }, [selectedVideo]);

    // Automatically select the first video
    useEffect(() => {
        if (videos.length > 0 && !selectedVideo) {
            setSelectedVideo(videos[0]);
        }
    }, [videos, selectedVideo]);

    return (
        <Flex direction="row" className={styles.container} aria-label="Video player interface">
            {/* Sidebar */}
            <div className={styles.sidebarContainer}>
                <Flex
                    direction="column"
                    className={`${styles.sidebar} ${isSidebarExpanded ? '' : styles.collapsed}`}
                    aria-expanded={isSidebarExpanded}
                >
                    {isSidebarExpanded && (
                        <>
                            <Button
                                onClick={() => setIsSidebarExpanded(false)}
                                aria-label="Collapse sidebar"
                                className={styles.toggleButton}
                            >
                                <FaChevronLeft /> Collapse
                            </Button>
                            <Heading variant="heading-strong-m" marginBottom="s">
                                Video Library
                            </Heading>
                            {videos.length === 0 ? (
                                <p>No videos available</p>
                            ) : (
                                <Scroller maxHeight={500} className={styles.videoScroller}>
                                    <Flex direction="column" gap="s">
                                        {videos.map((video, index) => (
                                            <Card
                                                key={index}
                                                onClick={() => setSelectedVideo(video)}
                                                padding="m"
                                                className={`${styles.videoCard} ${
                                                    selectedVideo?.name === video.name ? styles.selected : ''
                                                }`}
                                                role="button"
                                                tabIndex={0}
                                                aria-label={`Play ${video.name}`}
                                                onKeyDown={(e) => {
                                                    if (e.key === 'Enter' || e.key === ' ') {
                                                        setSelectedVideo(video);
                                                    }
                                                }}
                                            >
                                                <div className={styles.cardContent}>{video.name}</div>
                                            </Card>
                                        ))}
                                    </Flex>
                                </Scroller>
                            )}
                        </>
                    )}
                </Flex>
                {!isSidebarExpanded && (
                    <Button
                        className={styles.expandButton}
                        onClick={() => setIsSidebarExpanded(true)}
                        aria-label="Expand sidebar"
                    >
                        <FaChevronRight /> Expand
                    </Button>
                )}
            </div>

            {/* Video Player */}
            <Flex direction="column" className={styles.playerWrapper}>
                {selectedVideo ? (
                    <div className={styles.videoContainer} data-vjs-player>
                        <video
                            ref={videoRef}
                            className="video-js vjs-big-play-centered"
                            playsInline
                            aria-label={`Playing ${selectedVideo.name}`}
                        />
                    </div>
                ) : (
                    <p>Select a video to play</p>
                )}
            </Flex>
        </Flex>
    );
}