import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import { Layout } from '@/components/common';

import { QUERY_KEYS } from '@/constants';
import { gqlRequest, QUERIES } from '@/graphql';
import { CoachingContainer } from '@/containers';

async function Coaching() {

    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: [QUERY_KEYS.COACHING_PAGE],
        queryFn: () => gqlRequest(QUERIES.COACHING_PAGE)
    });

    await queryClient.prefetchQuery({
        queryKey: [QUERY_KEYS.TESTIMONIALS],
        queryFn: () => gqlRequest(QUERIES.TESTIMONIALS)
    });

    return(
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Layout main className="pt-40! pb-10 md:pb-20 gap-50 md:gap-40 z-30">
                <CoachingContainer />
            </Layout>
        </HydrationBoundary>
    );
};

export default Coaching;