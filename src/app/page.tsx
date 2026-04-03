import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import { Layout } from '@/components/common';
import { Jumbotron, MyPromises, Testimonials } from '@/components/Homepage';
import { BookList } from '@/components/Books';
import { RecentPodcastEpisodes } from '@/components/Podcast';
import CompanyMarquee from '@/components/CompanyMarquee';

import { QUERY_KEYS } from '@/constants';
import { gqlRequest, QUERIES } from '@/graphql';

async function Home() {

    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: [QUERY_KEYS.BOOKS_LIST],
        queryFn: () => gqlRequest(QUERIES.BOOKS_LIST)
    });

    await queryClient.prefetchQuery({
        queryKey: [QUERY_KEYS.TESTIMONIALS],
        queryFn: () => gqlRequest(QUERIES.TESTIMONIALS)
    });

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