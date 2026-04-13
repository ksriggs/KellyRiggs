"use client"

import type { IconType } from 'react-icons';
import type { HomePagePromisesQuery, HomePagePromisesQueryVariables } from '@/graphql/generated/graphql';

import { useQuery } from '@tanstack/react-query';
import { FaChartLine, FaScaleBalanced } from 'react-icons/fa6';

import MyPromiseItem from './MyPromiseItem';
import { MotionFadeIn, SectionSubtitle, SectionTitle, Spinner } from '@/components/common';

import { QUERY_KEYS } from '@/constants';
import { gqlRequest, QUERIES } from '@/graphql';
import BookACall from '@/components/BookACall';

function MyPromises() {

    const { data, isLoading } = useQuery({
        queryKey: [QUERY_KEYS.HOMEPAGE_PROMISES],
        queryFn: () => gqlRequest<
            HomePagePromisesQuery, 
            HomePagePromisesQueryVariables
        >(QUERIES.HOMEPAGE_PROMISES)
    })

    const getIcon = (title: string): IconType => {
        switch(title) {
            case "Leadership":
                return FaScaleBalanced;
            case "Sales":
                return FaChartLine;
            default:
                return FaScaleBalanced;
        }
    };

    const renderPromiseItems = () => {
        if(!data) return;

        const promises = data.homePagePromises?.edges ?? [];
        return promises.toReversed().map((item, index) => (
            <MyPromiseItem 
                key={`promise-items-${index}`}
                title={item.node.title ?? ""}
                icon={getIcon(item.node.title ?? "")}
                description={item.node.mainContent ?? ""}
            />
        ));
    };

    if(!data || isLoading) {
        return <Spinner />
    }

    return(
        <div className="flex flex-col items-center justify-center gap-10">
            <MotionFadeIn>
                <div className="text-center flex flex-col gap-3">
                    <SectionTitle>
                        My <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">Promises</span> To You
                    </SectionTitle>
                    <SectionSubtitle>No hype. No magic bullets. Just real results. NOW.</SectionSubtitle>
                </div>
            </MotionFadeIn>
            <MotionFadeIn>
                <div className="flex gap-8 justify-center items-center flex-wrap">
                    {renderPromiseItems()}
                </div>
            </MotionFadeIn>
            <MotionFadeIn>
                <div className="flex flex-row justify-center items-center gap-5">
                    <p className="font-semibold">Want to know more?</p>
                    <BookACall className="px-4 py-2 text-md" />
                </div>
            </MotionFadeIn>
        </div>
    );
};

export default MyPromises;