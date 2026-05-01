import type { BizLockerRoomContentQuery, BizLockerRoomContentQueryVariables } from '@/graphql/generated/graphql';

import { useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/constants';
import { gqlRequest, QUERIES } from '@/graphql';

import { Spinner } from '@/components/common';

function BizLockerRoomSummary() {

    const { data, isLoading } = useQuery({
        queryKey: [QUERY_KEYS.BIZ_LOCKER_ROOM_CONTENT],
        queryFn: () => gqlRequest<BizLockerRoomContentQuery, BizLockerRoomContentQueryVariables>(
            QUERIES.BIZ_LOCKER_ROOM_CONTENT
        )
    });

    const renderContent = () => {
        if(!data) return;
        
        const summary = data.bizLockerRoomContents?.edges[0];

        return(
            <div className="flex items-center justify-center text-center">
                <div 
                    className="bg-card p-4 rounded-lg shadow font-semibold w-full text-lg lg:w-10/12 flex flex-col gap-5"
                    dangerouslySetInnerHTML={{ 
                        __html: summary?.node.sectionContent ?? "" 
                    }}
                />
            </div>
        );
    };

    if(!data || isLoading) {
        return <Spinner />
    }

    return renderContent();
};

export default BizLockerRoomSummary;