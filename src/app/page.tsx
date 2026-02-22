import React from 'react';

import { Layout, Marquee } from '@/components/common';
import { Jumbotron, MyPromises, Testimonials } from '@/components/Homepage';
import { BookList } from '@/components/Books';

import { GEA, Hubblle, PPG, UNFI, Watco } from '@/components/common';
import { RecentPodcastEpisodes } from '@/components/Podcast';
import CompanyMarquee from '@/components/CompanyMarquee';

function Home() {

    return (
        <React.Fragment>
            <Jumbotron />
            <Layout main className="pt-40! pb-10 md:pb-20 gap-50 md:gap-60 z-30">
                <CompanyMarquee />
                <MyPromises />
                <Testimonials />
                <BookList />
                <RecentPodcastEpisodes />
            </Layout>
        </React.Fragment>
    );
};

export default Home;