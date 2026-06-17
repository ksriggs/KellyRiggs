import type { Viewport, Metadata } from 'next';
import type { BooksSingleQuery, BooksSingleQueryVariables } from '@/graphql/generated/graphql';

import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { Layout } from '@/components/common';
import { BookItem } from '@/components/Books';

import { QUERY_KEYS } from '@/constants';
import { gqlRequest, QUERIES } from '@/graphql';
import { Testimonials } from '@/components/Homepage';
import CTA from '@/components/CTA';

import { useThemeStore } from '@/store/theme';

export const viewport: Viewport = {
    themeColor: useThemeStore.getState().theme.colors.primary
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const queryClient = new QueryClient();  
    const query = await queryClient.fetchQuery({
        queryKey: [QUERY_KEYS.BOOKs_SINGLE, slug],
        queryFn: () => gqlRequest<BooksSingleQuery, BooksSingleQueryVariables>(QUERIES.BOOKS_SINGLE, {
            id: slug
        })
    });

    return {
        metadataBase: new URL('https://kellyriggs.com'),
        title: `Kelly Riggs | ${query.book?.title}`,
        description: query.book?.description,
        openGraph: {
            siteName: "Kelly Riggs",
            url: "https://kellyriggs.com/podcast",
            images: [query.book?.coverImage?.node.mediaItemUrl ?? ""]
        }
    };
};

interface SingleBookProps {
    params: Promise<{ slug: string }>
};

async function SingleBook({ params }: SingleBookProps) {

    const { slug } = await params;
    const queryClient = new QueryClient();

    await Promise.all([
        queryClient.prefetchQuery({
            queryKey: [QUERY_KEYS.BOOKs_SINGLE, slug],
            queryFn: () => gqlRequest<BooksSingleQuery, BooksSingleQueryVariables>(QUERIES.BOOKS_SINGLE, {
                id: slug
            })
        }),
        queryClient.prefetchQuery({
            queryKey: [QUERY_KEYS.TESTIMONIALS],
            queryFn: () => gqlRequest(QUERIES.TESTIMONIALS)
        })
    ]);

    return(
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Layout main transparent className="gap-30 mb-40 pt-40">
                <BookItem slug={slug} />
                <Testimonials />
                <CTA />
            </Layout>
        </HydrationBoundary>
    );
};

export default SingleBook;