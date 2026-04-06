import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { Layout } from '@/components/common';
import { AboutContainer } from '@/containers';

import { QUERY_KEYS } from '@/constants';
import { gqlRequest, QUERIES } from '@/graphql';

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