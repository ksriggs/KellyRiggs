"use client"

import type { CoachingPageQuery, CoachingPageQueryVariables } from '@/graphql/generated/graphql';

import React from 'react';
import { useQuery } from '@tanstack/react-query';

import { Spinner, SectionTitle, SectionSubtitle, YouTubePlayer } from '@/components/common';
import { Testimonials } from '@/components/Homepage';
import { CoachingHeader, CoachingKeynotes } from '@/components/BizLockerRoom';
import CTA from '@/components/CTA';
import BookACall from '@/components/BookACall';

import { QUERY_KEYS, YOUTUBE_VIDEO_IDS } from '@/constants';
import { gqlRequest, QUERIES } from '@/graphql';
import { text } from '@/utils';

function CoachingContainer() {

    const { data, isLoading } = useQuery({
        queryKey: [QUERY_KEYS.COACHING_PAGE],
        queryFn: () => gqlRequest<
            CoachingPageQuery,
            CoachingPageQueryVariables
        >(QUERIES.COACHING_PAGE)
    });

    const renderHeader = () => {
        if(!data) return;

        const content = data.coachingContents?.edges[0];
        return(
            <CoachingHeader
                title={content?.node.sectionTitle ?? ""}
                subtitle={content?.node.sectionSubtitle ?? ""}
                questions={text.parsePipeSeparatorString(content?.node.questions ?? "")}
                ctaTitle={content?.node.callToActionTitle ?? ""}
            />
        );
    };

    const renderCoachingKeynotes = () => {
        if(!data) return;

        const coachingKeynotes = data.coachingKeynotes?.edges ?? [];

        return(
            <CoachingKeynotes 
                items={
                    coachingKeynotes.map((item) => ({
                        title: item.node.title ?? "",
                        subtitle: item.node.subtitle ?? "",
                        timeNeeded: item.node.timeNeeded ?? "",
                        audience: (item.node.audience ?? "").split(","),
                        description: item.node.mainContent ?? ""
                    }))
                } 
            />
        );
    };

    if(!data || isLoading) {
        return <Spinner />
    }

    return(
        <React.Fragment>
            <div className="w-full flex flex-col gap-15 items-center justify-center">
                <div className="flex flex-col gap-4 items-center justify-center">
                    <SectionTitle>
                        COUNTER Mentor™ 
                    </SectionTitle>
                    <SectionSubtitle>
                        Leadership Coaching
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
            {renderHeader()}
            <Testimonials />
            {renderCoachingKeynotes()}
            <CTA />
        </React.Fragment>
    );
};

export default CoachingContainer;