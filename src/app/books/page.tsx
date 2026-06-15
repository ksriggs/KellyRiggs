import type { Viewport, Metadata } from 'next';

import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import { Layout } from '@/components/common';

import { gqlRequest, QUERIES } from '@/graphql';
import { IMAGE_RESOURCES, QUERY_KEYS } from '@/constants';
import { BooksContainer } from '@/containers';

import { useThemeStore } from '@/store/theme';

export const viewport: Viewport = {
    themeColor: useThemeStore.getState().theme.colors.primary
};

export async function generateMetadata(): Promise<Metadata> {
    return {
        metadataBase: new URL('https://kellyriggs.com'),
        title: "Kelly Riggs | Books",
        description: `
            Browse the latest books and published works by Kelly Riggs. Elevate your professional growth with essential reading for leaders and high-performers.
        `,
        openGraph: {
            siteName: "Kelly Riggs",
            url: "https://kellyriggs.com/books",
            images: [
                {
                    url: IMAGE_RESOURCES.LOGO,
                    height: 192,
                    width: 192
                }
            ]
        }
    };
};

async function Books() {

    const queryClient = new QueryClient();
    await queryClient.prefetchQuery({
        queryKey: [QUERY_KEYS.BOOKS_LIST],
        queryFn: () => gqlRequest(QUERIES.BOOKS_LIST)
    });

    return(
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Layout main transparent className="gap-10 mb-40 pt-40">
                <BooksContainer />
            </Layout>
        </HydrationBoundary>
    );
};

export default Books;