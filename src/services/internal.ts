import type { YouTubeFeedResponse } from '@/types/youtubeFeed';

export async function getYouTubeRecentYouTubeVideos(): Promise<YouTubeFeedResponse> {

    const res = await fetch("/api/youtube-feed");

    if(!res.ok) {
        throw new Error("Unable to fetch YouTube Feed");
    }

    return await res.json();
};