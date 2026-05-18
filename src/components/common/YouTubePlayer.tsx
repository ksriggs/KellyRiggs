"use client";

import type { YouTubeProps, YouTubePlayer as PlayerType } from 'react-youtube';
import { useRef, useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa6';
import YouTube from 'react-youtube';
import Spinner from './Spinner';

interface YouTubePlayerProps extends YouTubeProps {
    className?: string;
}

function YouTubePlayer({ className, ...rest }: YouTubePlayerProps) {

    const playerRef = useRef<PlayerType | null>(null);
    const [isReady, setIsReady] = useState<boolean>(false);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    const onReady: YouTubeProps["onReady"] = (e) => {
        playerRef.current = e.target;
        setIsReady(true);
        if (rest.onReady) {
            rest.onReady(e);
        }
    };

    return (
        <>
        <div className={`relative group duration-300 w-full aspect-video ${className}`}>
            {
                isReady ?
                <div 
                    className={`
                        flex opacity-0 group-hover:opacity-100 duration-300 absolute inset-0 z-10 
                        bg-black/40 items-center justify-center pointer-events-none
                    `}
                >
                    <div className="bg-card-light rounded-full text-4xl text-text p-5">
                        {isPlaying ? <FaPause /> : <FaPlay />}
                    </div>
                </div>
                :
                <div className="flex items-center justify-center h-full w-full">
                    <div className="absolute">
                        <Spinner color="accent" size={30} />
                    </div>
                </div>
            }

            <YouTube 
                opts={{
                    width: '100%',
                    height: '100%',
                    ...rest.opts
                }}
                className="w-full h-full"          
                onReady={onReady}
                onPlay={(e) => {
                    setIsPlaying(true);
                    if (rest.onPlay) rest.onPlay(e);
                }}
                onPause={(e) => {
                    setIsPlaying(false);
                    if (rest.onPause) rest.onPause(e);
                }}
                onEnd={(e) => {
                    setIsPlaying(false);
                    if (rest.onEnd) rest.onEnd(e);
                }}
                {...rest}
            />
        </div>
        </>
    );
}

export default YouTubePlayer;