export interface YouTubeFeedAuthor {
    name: string,
    url: string
};

export interface YouTubeMediaCommunity {
    "media:starRating": string,
    "media:statistics": string
};

export interface YouTubeFeedMediaGroup {
    "media:community": YouTubeMediaCommunity,
    "media:content": string,
    "media:description": string,
    "media:thumbnail": string,
    "media:title": string
};

export interface YouTubeFeedEntry {
    author: YouTubeFeedAuthor,
    id: string,
    link: string,
    "media:group": YouTubeFeedMediaGroup,
    published: string,
    title: string,
    updated: string,
    "yt:channelId": string,
    "yt:videoId": string
};

export interface YouTubeFeed {
    author: YouTubeFeedAuthor,
    entry: YouTubeFeedEntry[],
    id: string,
    link: string[],
    published: string,
    title: string,
    "yt:channelId": string
};

export interface YouTubeFeedResponse {
    feed?: YouTubeFeed
};