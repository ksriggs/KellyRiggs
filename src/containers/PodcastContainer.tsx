"use client"

import React from 'react';

import { 
    SocialsBar, 
    SectionSubtitle, 
    SectionTitle, 
    YouTubePlayer
} from '@/components/common';
import { PodcastPageDescription, RecentPodcastEpisodes } from '@/components/Podcast';
import { QUERY_KEYS, YOUTUBE_VIDEO_IDS } from '@/constants';
import { useSuspenseQuery } from '@tanstack/react-query';
import { gqlRequest, QUERIES } from '@/graphql';
import { PodcastContentQuery, PodcastContentQueryVariables } from '@/graphql/generated/graphql';

function PodcastContainer() {

    const { data } = useSuspenseQuery({
        queryKey: [QUERY_KEYS.PODCAST_CONTENT],
        queryFn: () => gqlRequest<
            PodcastContentQuery,
            PodcastContentQueryVariables
        >(QUERIES.PODCAST_CONTENT)
    });

    return(
        <React.Fragment>
            <div className="flex flex-col items-center justify-center gap-10">
                <div className="flex flex-col justify-center items-center gap-10">
                    <div className="flex flex-col gap-4 items-center justify-center">
                        <SectionTitle>
                            Sales <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">[UN]</span>Training Podcast
                        </SectionTitle>
                        <SectionSubtitle>
                        A very different kind of sales podcast
                        </SectionSubtitle>
                    </div>
                    <div className="text-muted flex text-5xl gap-10">
                        <SocialsBar
                            whitelist={[
                                "Spotify",
                                "YouTube",
                                "Apple Podcasts"
                            ]}
                        />
                    </div>
                </div>
                <div className="w-full lg:w-8/12 rounded-lg overflow-hidden">
                    <YouTubePlayer 
                        videoId={YOUTUBE_VIDEO_IDS.PODCAST_TRAILER}
                    />
                </div>
                <PodcastPageDescription 
                    description={data.podcastContents?.edges[0].node.description as string} 
                    callout={data.podcastContents?.edges[0].node.descriptionCallout as string}
                />
            </div>
            <div className="flex flex-col justify-center items-center gap-20">
                <div className="flex flex-col justify-center items-center gap-4">
                    <SectionTitle>Check Out Some Recent Episodes</SectionTitle>
                    <SectionSubtitle>Find out why sales training typically fails!</SectionSubtitle>
                </div>
                <RecentPodcastEpisodes hideHeader />
            </div>
        </React.Fragment>
    );
};

export default PodcastContainer;