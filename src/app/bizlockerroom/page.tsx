import type { Viewport, Metadata } from 'next';
import type { BizLockerRoomContentQuery, BizLockerRoomContentQueryVariables } from '@/graphql/generated/graphql';

import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'; 

import { Layout } from '@/components/common';
import CompanyMarquee from '@/components/CompanyMarquee';

import { BizLockerRoomHeader, ThreeProfitKillers } from '@/components/BizLockerRoom';
import { RecentPodcastEpisodes } from '@/components/Podcast';

import { useThemeStore } from '@/store/theme'; 

import { IMAGE_RESOURCES, QUERY_KEYS } from '@/constants';
import { gqlRequest, QUERIES } from '@/graphql';

export const viewport: Viewport = {
    themeColor: useThemeStore.getState().theme.colors.primary
};

export async function generateMetadata(): Promise<Metadata> {
    const queryClient = new QueryClient();
    const query = await queryClient.fetchQuery({
        queryKey: [QUERY_KEYS.BIZ_LOCKER_ROOM_CONTENT],
        queryFn: () => gqlRequest<
            BizLockerRoomContentQuery,
            BizLockerRoomContentQueryVariables
        >(QUERIES.BIZ_LOCKER_ROOM_CONTENT)
    });

    const cleanDescription = (query.bizLockerRoomContents?.edges[0].node.sectionContent ?? "").replace(/<[^>]*>?/gm, '');

    return {
        metadataBase: new URL('https://kellyriggs.com'),
        title: "Business Locker Room",
        description: cleanDescription,
        openGraph: {
            siteName: "Kelly Riggs",
            url: "https://kellyriggs.com/content",
            images: [IMAGE_RESOURCES.BIZ_LOCKER_ROOM_LOGO]
        }
    }
};

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
                <BizLockerRoomHeader showSummary />
                <CompanyMarquee />
                <ThreeProfitKillers />
                <RecentPodcastEpisodes />
            </Layout>
        </HydrationBoundary>
    );
};

export default BizLockerRoom;