"use client"

import type { BizLockerRoomContentQuery, BizLockerRoomContentQueryVariables } from '@/graphql/generated/graphql';

import { useSuspenseQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/constants';
import { gqlRequest, QUERIES } from '@/graphql';

function BizLockerRoomSummary() {

    const { data } = useSuspenseQuery({
        queryKey: [QUERY_KEYS.BIZ_LOCKER_ROOM_CONTENT],
        queryFn: () => gqlRequest<BizLockerRoomContentQuery, BizLockerRoomContentQueryVariables>(
            QUERIES.BIZ_LOCKER_ROOM_CONTENT
        )
    });

    return(
        <div className="flex items-center justify-center">
            <div 
                className="bg-card p-4 rounded-lg shadow font-semibold w-full text-lg lg:w-10/12 flex flex-col gap-5"
                dangerouslySetInnerHTML={{ 
                    __html: data.bizLockerRoomContents?.edges[0]?.node.sectionContent ?? "" 
                }}
            />
        </div>
    );
};

export default BizLockerRoomSummary;