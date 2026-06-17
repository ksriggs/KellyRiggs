"use client"

import type { SpeakingKeynotesQuery, SpeakingKeynotesQueryVariables } from '@/graphql/generated/graphql';

import { useSuspenseQuery } from '@tanstack/react-query';
import { KeynoteCard } from './KeynoteCard';

import { QUERY_KEYS } from '@/constants';
import { gqlRequest, QUERIES } from '@/graphql';

function SpeakingKeynotes() {

    const { data } = useSuspenseQuery({
        queryKey: [QUERY_KEYS.SPEAKING_KEYNOTES],
        queryFn: () => gqlRequest<
            SpeakingKeynotesQuery,
            SpeakingKeynotesQueryVariables
        >(QUERIES.SPEAKING_KEYNOTES)
    });

    const renderContent = () => {

        const speakingKeynotes = data.speakingKeynotes?.edges ?? [];
        return speakingKeynotes.toReversed().map((item, index) => (
            <KeynoteCard
                key={`keynote-speaking-content-${index}`}
                title={item.node.title ?? ""}
                direction={index % 2 === 0 ? "left" : "right"}
                subtitle={item.node.subtitle ?? ""}
                timeNeeded={item.node.timeNeeded ?? ""}
                audience={(item.node.audience ?? "").split(",")}
                description={(
                    <div 
                        className="flex flex-col gap-6"
                        dangerouslySetInnerHTML={{ __html: item.node.mainContent ?? ""}} 
                    />
                )}
            />
        ));
    };

    return(
        <div className="flex flex-col gap-30">
            {renderContent()}
        </div>
    );
};

export default SpeakingKeynotes;