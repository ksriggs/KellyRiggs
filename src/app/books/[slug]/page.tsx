import type { BooksSingleQuery, BooksSingleQueryVariables } from '@/graphql/generated/graphql';

import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { Layout } from '@/components/common';
import { BookItem } from '@/components/Books';

import { QUERY_KEYS } from '@/constants';
import { gqlRequest, QUERIES } from '@/graphql';
import { Testimonials } from '@/components/Homepage';
import CTA from '@/components/CTA';

interface SingleBookProps {
    params: Promise<{ slug: string }>
};

async function SingleBook({ params }: SingleBookProps) {

    const { slug } = await params;
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery({
        queryKey: [QUERY_KEYS.BOOKs_SINGLE, slug],
        queryFn: () => gqlRequest<BooksSingleQuery, BooksSingleQueryVariables>(QUERIES.BOOKS_SINGLE, {
            id: slug
        })
    });

    await queryClient.prefetchQuery({
        queryKey: [QUERY_KEYS.TESTIMONIALS],
        queryFn: () => gqlRequest(QUERIES.TESTIMONIALS)
    });

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