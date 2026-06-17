import type { YouTubeFeedResponse } from '@/types/youtubeFeed';

import { ENV } from '@/constants';

export async function getYouTubeRecentYouTubeVideos(): Promise<YouTubeFeedResponse> {
    const res = await fetch(`${ENV.getSiteUrl()}/api/youtube-feed`);

    if(!res.ok) {
        throw new Error("Unable to fetch YouTube Feed");
    }

    return await res.json();
};