"use client"

import type { YouTubeProps, YouTubePlayer as PlayerType } from 'react-youtube';

import React, { useEffect, useRef, useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa6';

import YouTube from 'react-youtube';

interface YouTubePlayerProps extends YouTubeProps {
    className?: React.HTMLAttributes<HTMLDivElement>["className"]
};

function YouTubePlayer({ className, ...rest }: YouTubePlayerProps) {

    const containerRef = useRef<HTMLDivElement | null>(null);
    const playerRef = useRef<PlayerType>(null);
    const isMounted = useRef(false);

    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [dimensions, setDimensions] = useState({
        height: 0,
        width: 0
    });

    useEffect(() => {
        isMounted.current = true;

        const observer = new ResizeObserver((entries) => {
            if(!isMounted.current) return;

            for(const entry of entries) {
                const { height, width } = entry.contentRect;
                setDimensions({ height, width });
            }
        });

        if(containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            isMounted.current = false;
            observer.disconnect();

            if(playerRef.current) {
                try {
                    playerRef.current.destroy();
                }
                catch(err) {
                    console.error(err);
                }
            }
        }
    }, []);

    const onReady: YouTubeProps["onReady"] = (e) => {
        if (!isMounted.current) return;

        playerRef.current = e.target;

        if(rest.onReady) {
            rest.onReady(e);
        }
    };

    const shouldRenderVideos = (): boolean => {
        return dimensions.width > 0 && dimensions.height > 0;
    };

    return(
        <div className={`relative group duration-300 z-100! h-80 w-full ${className}`} ref={containerRef}>
            <div 
                className={`
                    flex opacity-0 group-hover:opacity-100 duration-300 absolute top-0 h-full w-full z-100! 
                    bg-black/40 items-center justify-center pointer-events-none
                `}
            >
                <div className="bg-card-light rounded-full text-4xl text-text py-5 px-5 hover:cursor-pointer">
                {
                    isPlaying ?
                    <FaPause /> :
                    <FaPlay />
                }
                </div>
            </div>
            <div>
                {
                    shouldRenderVideos() &&
                    <YouTube 
                        opts={{
                            height: dimensions.height,
                            width: dimensions.width,
                            ...rest.opts
                        }}
                        onReady={onReady}
                        onPlay={(e) => {
                            setIsPlaying(true);
                            if(rest.onPlay) {
                                rest.onPlay(e);
                            }
                        }}
                        onPause={(e) => {
                            setIsPlaying(false);
                            if(rest.onPause) {
                                rest.onPause(e);
                            }
                        }}
                        onEnd={(e) => {
                            setIsPlaying(false);
                            if(rest.onEnd) {
                                rest.onEnd(e);
                            }
                        }}
                        {...rest}
                    />
                }
            </div>
        </div>
    );
};

export default YouTubePlayer;