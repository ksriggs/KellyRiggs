import type { Viewport, Metadata } from 'next';
import type { AboutContentQuery, AboutContentQueryVariables } from '@/graphql/generated/graphql';

import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import { Layout } from '@/components/common';
import { Jumbotron, MyPromises, Testimonials } from '@/components/Homepage';
import { BookList } from '@/components/Books';
import { RecentPodcastEpisodes } from '@/components/Podcast';
import CompanyMarquee from '@/components/CompanyMarquee';

import { useThemeStore } from '@/store/theme';

import { IMAGE_RESOURCES, QUERY_KEYS } from '@/constants';
import { gqlRequest, QUERIES } from '@/graphql';

export const viewport: Viewport = {
    themeColor: useThemeStore.getState().theme.colors.primary
};

export async function generateMetadata(): Promise<Metadata> {
    const queryClient = new QueryClient();
    const query = await queryClient.fetchQuery({
        queryKey: [QUERY_KEYS.ABOUT_CONTENT],
        queryFn: () => gqlRequest<AboutContentQuery, AboutContentQueryVariables>(QUERIES.ABOUT_CONTENT)
    });

    return {
        metadataBase: new URL('https://kellyriggs.com'),
        title: "Kelly Riggs",
        description: query.aboutContents?.edges[0].node.mainContent,
        openGraph: {
            siteName: "Kelly Riggs",
            url: "https://kellyriggs.com",
            images: [
                {
                    url: IMAGE_RESOURCES.LOGO,
                    height: 192,
                    width: 192
                }
            ]
        }
    }
};

async function Home() {

    const queryClient = new QueryClient();

    await Promise.all([
        queryClient.prefetchQuery({
            queryKey: [QUERY_KEYS.BOOKS_LIST],
            queryFn: () => gqlRequest(QUERIES.BOOKS_LIST)
        }),
        queryClient.prefetchQuery({
            queryKey: [QUERY_KEYS.TESTIMONIALS],
            queryFn: () => gqlRequest(QUERIES.TESTIMONIALS)
        }),
        queryClient.prefetchQuery({
            queryKey: [QUERY_KEYS.HOMEPAGE_PROMISES],
            queryFn: () => gqlRequest(QUERIES.HOMEPAGE_PROMISES)
        })
    ]);

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Jumbotron />
            <Layout main className="pt-40! pb-10 md:pb-20 gap-40 md:gap-40 z-30">
                <MyPromises />
                <RecentPodcastEpisodes />
                <BookList />
                <CompanyMarquee />
                <Testimonials />
            </Layout>
        </HydrationBoundary>
    );
};

export default Home;