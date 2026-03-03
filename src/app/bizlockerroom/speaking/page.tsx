import { Layout, SectionSubtitle, SectionTitle, YouTubePlayer } from '@/components/common';
import { CoachingForLeaders, Focus, LeadershipDilemma, QuitWhiningAndStartSelling, WinningBusiness } from '@/components/BizLockerRoom';
import { Testimonials } from '@/components/Homepage';

import { YOUTUBE_VIDEO_IDS } from '@/constants';
import CTA from '@/components/CTA';
import BookACall from '@/components/BookACall';

function Speaking() {

    const ContentComponents = [
        LeadershipDilemma,
        QuitWhiningAndStartSelling,
        CoachingForLeaders,
        Focus,
        WinningBusiness
    ];

    const renderContent = () => {
        return ContentComponents.map((Component, index) => (
            <Component 
                key={`keynote-speaking-content-${index}`}
                direction={index % 2 === 0 ? "left" : "right"}
            />
        ));
    };

    return(
        <Layout main className="pt-40! pb-10 md:pb-20 gap-50 md:gap-60 z-30">
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
            <div className="flex flex-col gap-60">
                {renderContent()}
            </div>
            <CTA />
        </Layout>
    );
};

export default Speaking;