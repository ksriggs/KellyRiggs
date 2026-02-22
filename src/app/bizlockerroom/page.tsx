
import { Layout } from '@/components/common';
import CompanyMarquee from '@/components/CompanyMarquee';

import { BizLockerRoomHeader, ThreeProfitKillers } from '@/components/BizLockerRoom';
import { RecentPodcastEpisodes } from '@/components/Podcast';

function BizLockerRoom() {

    return(
        <Layout main className="pt-40! pb-10 md:pb-20 gap-50 md:gap-60 z-30">
            <BizLockerRoomHeader />
            <CompanyMarquee />
            <ThreeProfitKillers />
            <RecentPodcastEpisodes />
        </Layout>
    );
};

export default BizLockerRoom;