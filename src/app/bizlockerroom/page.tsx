import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'; 

import { Layout } from '@/components/common';
import CompanyMarquee from '@/components/CompanyMarquee';

import { BizLockerRoomHeader, ThreeProfitKillers } from '@/components/BizLockerRoom';
import { RecentPodcastEpisodes } from '@/components/Podcast';
import { QUERY_KEYS } from '@/constants';
import { gqlRequest, QUERIES } from '@/graphql';

async function BizLockerRoom() {

    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: [QUERY_KEYS.PROFIT_KILLERS],
        queryFn: () => gqlRequest(QUERIES.PROFIT_KILLER_CARDS)
    });

    await queryClient.prefetchQuery({
        queryKey: [QUERY_KEYS.BIZ_LOCKER_ROOM_CONTENT],
        queryFn: () => gqlRequest(QUERIES.BIZ_LOCKER_ROOM_CONTENT)
    });

    return(
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Layout main className="pt-40! pb-10 md:pb-20 gap-50 md:gap-15 z-30">
                <BizLockerRoomHeader />
                <CompanyMarquee />
                <ThreeProfitKillers />
                <RecentPodcastEpisodes />
            </Layout>
        </HydrationBoundary>
    );
};

export default BizLockerRoom;