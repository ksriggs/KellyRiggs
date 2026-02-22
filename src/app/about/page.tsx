import { AboutHighlights, MeetKellyRiggs, WhatIDo } from '@/components/About';
import { Layout } from '@/components/common';

function About() {

    return(
        <Layout main transparent className="gap-50 mb-40 pt-40">
            <div className="flex flex-col items-center justify-center gap-8">
                <MeetKellyRiggs />
                <WhatIDo className="flex flex-col lg:flex-row gap-10" />
            </div>
            <AboutHighlights />

        </Layout>
    );
};

export default About;