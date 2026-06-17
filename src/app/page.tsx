import type { Viewport, Metadata } from 'next';
import type { AboutContentQuery, AboutContentQueryVariables } from '@/graphql/generated/graphql';

import { Suspense } from 'react';
import { QueryClient } from '@tanstack/react-query';

import { Layout, Spinner, ClientOnly } from '@/components/common';
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

    return (
        <>
            <Jumbotron />
            <Layout main className="pt-40! pb-10 md:pb-20 gap-40 md:gap-40 z-30">
                <Suspense fallback={<Spinner />}>
                    <MyPromises />
                </Suspense>
                <Suspense fallback={<Spinner />}>
                    <ClientOnly>
                        <RecentPodcastEpisodes />
                    </ClientOnly>
                </Suspense>
                <Suspense fallback={<Spinner />}>
                    <BookList />
                </Suspense>
                <CompanyMarquee />
                <Suspense fallback={<Spinner />}>
                    <Testimonials />
                </Suspense>
            </Layout>
        </>
    );
};

export default Home;