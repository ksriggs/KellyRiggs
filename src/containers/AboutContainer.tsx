"use client"

import type { AboutContentQuery, AboutContentQueryVariables } from '@/graphql/generated/graphql';

import React from 'react';
import { useQuery } from '@tanstack/react-query';

import { Spinner } from '@/components/common';
import { AboutHighlights, MeetKellyRiggs, WhatIDo } from '@/components/About';

import { QUERY_KEYS } from '@/constants';
import { gqlRequest, QUERIES } from '@/graphql';

import { text } from '@/utils';

function AboutContainer() {

    const { data, isLoading } = useQuery({
        queryKey: [QUERY_KEYS.ABOUT_CONTENT],
        queryFn: () => gqlRequest<AboutContentQuery, AboutContentQueryVariables>(QUERIES.ABOUT_CONTENT)
    });

    if(!data || isLoading) {
        return <Spinner />;
    }

    const renderContent = () => {
        if(!data) return;

        const aboutContent = data.aboutContents?.edges[0].node;
        const highlightItems = text.parsePipeSeparatorString(aboutContent?.highlights ?? "");

        return(
            <React.Fragment>
                <div className="flex flex-col items-center justify-center gap-8">
                    <MeetKellyRiggs content={aboutContent?.mainContent ?? ""} />
                    <WhatIDo 
                        className="flex flex-col lg:flex-row gap-10"
                        items={[
                            { title: aboutContent?.boxOneTitle ?? "", content: aboutContent?.boxOneContent ?? "" },
                            { title: aboutContent?.boxTwoTitle ?? "", content: aboutContent?.boxTwoContent ?? "" },
                            { title: aboutContent?.boxThreeTitle ?? "", content: aboutContent?.boxThreeContent ?? "" },
                        ]}
                    />
                </div>
                <AboutHighlights items={highlightItems} />
            </React.Fragment>
        );
    };

    return renderContent();
};

export default AboutContainer;