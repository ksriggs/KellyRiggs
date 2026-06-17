import type { YouTubeFeedResponse } from '@/types/youtubeFeed';

export async function getYouTubeRecentYouTubeVideos(): Promise<YouTubeFeedResponse> {

    console.log({
        deployUrl: process.env.DEPLOY_URL,
        deployPrimeUrl: process.env.DEPLOY_PRIME_URL
    });

    const res = await fetch(`/api/youtube-feed`);

    if(!res.ok) {
        throw new Error("Unable to fetch YouTube Feed");
    }

    return await res.json();
};