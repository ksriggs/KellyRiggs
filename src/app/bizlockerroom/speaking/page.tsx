import type { Viewport, Metadata } from 'next';
import type { BizLockerRoomContentQuery, BizLockerRoomContentQueryVariables } from '@/graphql/generated/graphql';

import { QueryClient, HydrationBoundary, dehydrate } from '@tanstack/react-query';

import { Layout, SectionSubtitle, SectionTitle, YouTubePlayer } from '@/components/common';
import { Testimonials } from '@/components/Homepage';
import { BizLockerRoomHeader, SpeakingKeynotes } from '@/components/BizLockerRoom';

import { YOUTUBE_VIDEO_IDS } from '@/constants';
import CTA from '@/components/CTA';
import BookACall from '@/components/BookACall';

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
        title: "Business LockerRoom | Keynote Speaking",
        description: cleanDescription,
        openGraph: {
            siteName: "Kelly Riggs",
            url: "https://kellyriggs.com/content",
            images: [IMAGE_RESOURCES.BIZ_LOCKER_ROOM_LOGO]
        }
    }
};

async function Speaking() {

    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: [QUERY_KEYS.TESTIMONIALS],
        queryFn: () => gqlRequest(QUERIES.TESTIMONIALS)
    });

    await queryClient.prefetchQuery({
        queryKey: [QUERY_KEYS.SPEAKING_KEYNOTES],
        queryFn: () => gqlRequest(QUERIES.SPEAKING_KEYNOTES)
    });

    return(
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Layout main className="pt-40! pb-10 md:pb-20 gap-30 md:gap-40 z-30">
                <div className="w-full flex flex-col gap-15 items-center justify-center">
                    <BizLockerRoomHeader />
                    <div className="flex flex-col gap-4 items-center justify-center">
                        <SectionTitle>
                            Keynote Speaking
                        </SectionTitle>
                        <SectionSubtitle>
                            Content-rich presentations that inspire results.
                        </SectionSubtitle>
                    </div>
                    <BookACall className="w-full" containerClass="w-full lg:w-3/12" />
                    <div className="w-full lg:w-8/12 rounded-lg overflow-hidden">
                        <YouTubePlayer 
                            videoId={YOUTUBE_VIDEO_IDS.KEYNOTE_SPEAKER}
                        />
                    </div>
                </div>
                <SpeakingKeynotes />
                <Testimonials />
                <CTA />
            </Layout>
        </HydrationBoundary>
    );
};

export default Speaking;