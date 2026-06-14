import type { Viewport, Metadata } from 'next';
import type { AboutContentQuery, AboutContentQueryVariables } from '@/graphql/generated/graphql';

import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { Layout } from '@/components/common';
import { AboutContainer } from '@/containers';

import { useThemeStore } from '@/store/theme';

import { QUERY_KEYS } from '@/constants';
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
        title: "Kelly Riggs | About",
        description: query.aboutContents?.edges[0].node.mainContent,
        openGraph: {
            siteName: "Kelly Riggs",
            url: "https://kellyriggs.com/about",
            images: [
                {
                    url: "/icon.svg",
                    height: 192,
                    width: 192
                }
            ]
        }
    }
};

async function About() {

    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: [QUERY_KEYS.ABOUT_CONTENT],
        queryFn: () => gqlRequest(QUERIES.ABOUT_CONTENT)
    });

    return(
        <Layout main transparent className="gap-40 mb-40 pt-40">
            <HydrationBoundary state={dehydrate(queryClient)}>
                <AboutContainer />
            </HydrationBoundary>
        </Layout>
    );
};

export default About;