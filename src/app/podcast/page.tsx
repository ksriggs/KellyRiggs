import type { Viewport, Metadata } from 'next';
import type { PodcastContentQuery, PodcastContentQueryVariables } from '@/graphql/generated/graphql';

import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { Layout } from '@/components/common';
import { PodcastContainer } from '@/containers';

import { useThemeStore } from '@/store/theme';

import { gqlRequest, QUERIES } from '@/graphql';
import { QUERY_KEYS } from '@/constants';

export const viewport: Viewport = {
    themeColor: useThemeStore.getState().theme.colors.primary
};

export async function generateMetadata(): Promise<Metadata> {
    const queryClient = new QueryClient();
    const query = await queryClient.fetchQuery({
        queryKey: [QUERY_KEYS.PODCAST_CONTENT],
        queryFn: () => gqlRequest<
            PodcastContentQuery,
            PodcastContentQueryVariables
        >(QUERIES.PODCAST_CONTENT)
    });

    const cleanDescription = (query.podcastContents?.edges[0].node.description ?? "").replace(/<[^>]*>?/gm, '');

    return {
        title: "Sales [UN]Training Podcast",
        description: cleanDescription,
        openGraph: {
            siteName: "Kelly Riggs",
            url: "https://kellyriggs.com/podcast",
            images: [
                {
                    url: "/icon.svg",
                    height: 192,
                    width: 192
                }
            ]
        }
    };
};

async function Podcast() {

    const queryClient = new QueryClient();
    await queryClient.prefetchQuery({
        queryKey: [QUERY_KEYS.PODCAST_CONTENT],
        queryFn: () => gqlRequest(QUERIES.PODCAST_CONTENT)
    });  

    return(
        <Layout main className="pt-40! pb-10 md:pb-20 gap-50 md:gap-40 z-30">
            <HydrationBoundary state={dehydrate(queryClient)}>
                <PodcastContainer />
            </HydrationBoundary>
        </Layout>
    );
};

export default Podcast;