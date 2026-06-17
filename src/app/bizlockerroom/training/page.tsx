import type { Viewport, Metadata } from 'next';
import type { BizLockerRoomContentQuery, BizLockerRoomContentQueryVariables } from '@/graphql/generated/graphql';

import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import { Layout, SectionTitle, YouTubePlayer } from '@/components/common';
import BookACall from '@/components/BookACall';

import { IMAGE_RESOURCES, QUERY_KEYS, YOUTUBE_VIDEO_IDS } from '@/constants';
import { gqlRequest, QUERIES } from '@/graphql';
import { CoachingContainer } from '@/containers';
import { BizLockerRoomHeader } from '@/components/BizLockerRoom';

import { useThemeStore } from '@/store/theme'; 

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
        title: "Business LockerRoom | Training",
        description: cleanDescription,
        openGraph: {
            siteName: "Kelly Riggs",
            url: "https://kellyriggs.com/content",
            images: [IMAGE_RESOURCES.BIZ_LOCKER_ROOM_LOGO]
        }
    }
};

async function Training() {

    const queryClient = new QueryClient();

    await Promise.all([
        queryClient.prefetchQuery({
            queryKey: [QUERY_KEYS.COACHING_PAGE],
            queryFn: () => gqlRequest(QUERIES.COACHING_PAGE)
        }),
        queryClient.prefetchQuery({
            queryKey: [QUERY_KEYS.TESTIMONIALS],
            queryFn: () => gqlRequest(QUERIES.TESTIMONIALS)
        })
    ]);

    return(
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Layout main className="pt-40! pb-10 md:pb-20 gap-30 md:gap-40 z-30">
                <div className="w-full flex flex-col gap-15 items-center justify-center">
                    <BizLockerRoomHeader />
                    <div className="flex flex-col gap-4 items-center justify-center">
                        <SectionTitle>
                            Leadership Development 
                        </SectionTitle>
                    </div>
                    <BookACall className="w-full" containerClass="w-full lg:w-3/12" />
                    <div className="w-full lg:w-8/12 rounded-lg overflow-hidden">
                        <YouTubePlayer 
                            videoId={YOUTUBE_VIDEO_IDS.KEYNOTE_SPEAKER}
                        />
                    </div>
                </div>
                <CoachingContainer />
            </Layout>
        </HydrationBoundary>
    );
};

export default Training;