"use client"

import type { CoachingPageQuery, CoachingPageQueryVariables } from '@/graphql/generated/graphql';

import React from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';

import { Testimonials } from '@/components/Homepage';
import { CoachingHeader, CoachingKeynotes } from '@/components/BizLockerRoom';
import CTA from '@/components/CTA';

import { QUERY_KEYS } from '@/constants';
import { gqlRequest, QUERIES } from '@/graphql';
import { text } from '@/utils';

function CoachingContainer() {

    const { data } = useSuspenseQuery({
        queryKey: [QUERY_KEYS.COACHING_PAGE],
        queryFn: () => gqlRequest<
            CoachingPageQuery,
            CoachingPageQueryVariables
        >(QUERIES.COACHING_PAGE)
    });

    const renderHeader = () => {
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

    return(
        <React.Fragment>
            {renderHeader()}
            {renderCoachingKeynotes()}
            <Testimonials />
            <CTA />
        </React.Fragment>
    );
};

export default CoachingContainer;