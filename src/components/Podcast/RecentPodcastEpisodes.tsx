"use client"

import { useSuspenseQuery } from '@tanstack/react-query';

import { getYouTubeRecentYouTubeVideos } from '@/services/internal';
import { QUERY_KEYS } from '@/constants';
import RecentPodcastList from './RecentPodcastItem';

interface RecentPodcastEpisodesProps {
    hideHeader?: boolean
};

function RecentPodcastEpisodes({ hideHeader }: RecentPodcastEpisodesProps) {

    const query = useSuspenseQuery({
        queryKey: [QUERY_KEYS.YOUTUBE_FEED],
        queryFn: getYouTubeRecentYouTubeVideos
    });

    return(
        query.data.feed ? 
        <RecentPodcastList 
            feed={query.data.feed} 
            hideHeader={hideHeader}
        /> 
        : 
        null
    );
};

export default RecentPodcastEpisodes;