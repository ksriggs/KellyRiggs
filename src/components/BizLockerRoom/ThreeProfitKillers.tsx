"use client"

import type { ProfitKillerCardsQuery, ProfitKillerCardsQueryVariables } from '@/graphql/generated/graphql';

import { useQuery } from '@tanstack/react-query';
import { MdCenterFocusStrong } from 'react-icons/md';
import { FaUsers, FaMoneyBillWave } from 'react-icons/fa';

import { MotionFadeIn, SectionTitle, Spinner } from '@/components/common';
import ProfitKillerCard  from './ProfitKillerCard';

import { QUERY_KEYS } from '@/constants';
import { gqlRequest, QUERIES } from '@/graphql';
import { IconType } from 'react-icons';

function ThreeProfitKillers() {

    const { data, isLoading } = useQuery({
        queryKey: [QUERY_KEYS.PROFIT_KILLERS],
        queryFn: () => (
            gqlRequest<
                ProfitKillerCardsQuery, 
                ProfitKillerCardsQueryVariables
            >(QUERIES.PROFIT_KILLER_CARDS)
        )
    });

    const delay = 0.1;

    const getIcon = (title: string): IconType => {
        switch(title) {
            case "A Focus Problem":
                return MdCenterFocusStrong;
            case "A Revenue Problem":
                return FaMoneyBillWave;
            case "A Leadership Problem":
                return FaUsers;
            default:
                return FaUsers;
        };
    }; 

    const renderProfitKillerCards = () => {
        if(!data) return;

        const profitKillers = data.profitKillerCards?.edges ?? [];
        return profitKillers.toReversed().map((item, index) => (
            <MotionFadeIn 
                key={`profit-killer-${item.node.title}-${index}`}
                className="w-full md:w-[33%]" 
                initialY="20dvh" 
                fadeDelay={index * delay} 
                posYDelay={(index + 1) * delay}
            >
                <ProfitKillerCard
                    
                    title={item.node.title ?? ""}
                    icon={getIcon(item.node.title ?? "")}
                    solutionButtonText={item.node.buttonTitle ?? ""}
                    solutionButtonUrl={item.node.buttonUrl ?? "/"}
                >
                    <div className="flex flex-col gap-5">
                        <p>{item.node.topContent ?? ""}</p>
                        <p className="font-bold text-accent">{item.node.highlightedContent ?? ""}</p>
                        <p>{item.node.bottomContent ?? ""}</p>
                    </div>
                </ProfitKillerCard>
            </MotionFadeIn>
        ));
    };

    if(!data || isLoading) {
        return <Spinner />
    }

    return(
        <div className="flex flex-col items-center justify-center gap-20">
            <MotionFadeIn>
                <SectionTitle>
                    3 <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">Profit-Killing</span> Problems Facing Your Business
                </SectionTitle>
            </MotionFadeIn>            
            <div className="flex flex-col md:flex-row gap-3 items-center justify-center">
                {renderProfitKillerCards()}
            </div>
        </div>
    );
};

export default ThreeProfitKillers;