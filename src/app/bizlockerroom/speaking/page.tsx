import { QueryClient, HydrationBoundary, dehydrate } from '@tanstack/react-query';

import { Layout, SectionSubtitle, SectionTitle, YouTubePlayer } from '@/components/common';
import { Testimonials } from '@/components/Homepage';
import { SpeakingKeynotes } from '@/components/BizLockerRoom';

import { YOUTUBE_VIDEO_IDS } from '@/constants';
import CTA from '@/components/CTA';
import BookACall from '@/components/BookACall';

import { QUERY_KEYS } from '@/constants';
import { gqlRequest, QUERIES } from '@/graphql';

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
            <Layout main className="pt-40! pb-10 md:pb-20 gap-50 md:gap-40 z-30">
                <div className="w-full flex flex-col gap-15 items-center justify-center">
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
                            className="h-120"
                            videoId={YOUTUBE_VIDEO_IDS.KEYNOTE_SPEAKER}
                        />
                    </div>
                </div>
                <Testimonials />
                <SpeakingKeynotes />
                <CTA />
            </Layout>
        </HydrationBoundary>
    );
};

export default Speaking;