import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import { Layout } from '@/components/common';

import { gqlRequest, QUERIES } from '@/graphql';
import { QUERY_KEYS } from '@/constants';
import { BooksContainer } from '@/containers';


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