"use client"

import type { ClientLogosQuery, ClientLogosQueryVariables } from '@/graphql/generated/graphql';
import type { MediaItem } from '@/components/common';

import { Marquee } from '@/components/common';
import { QUERY_KEYS } from '@/constants';
import { gqlRequest, QUERIES } from '@/graphql';
import { useQuery } from '@tanstack/react-query';

interface ClientLogoMarqueeProps {
    fill?: string
};

function ClientLogoMarquee({ fill="#ffffff" }: ClientLogoMarqueeProps) {

    const { data } = useQuery({
        queryKey: [QUERY_KEYS.CLIENT_LOGOS],
        queryFn: () => gqlRequest<ClientLogosQuery, ClientLogosQueryVariables>(QUERIES.CLIENT_LOGOS)
    });

    const structureClientLogos = (): MediaItem[] => {
        if(!data?.clientLogos?.edges) {
            return [];
        }

        const clientLogos = data.clientLogos.edges;

        return clientLogos.map((item) => ({
            url: item.node.logo?.node.mediaItemUrl ?? "",
            id: item.node.title ?? ""
        }));
    };
    
    return(
        <Marquee 
            items={structureClientLogos()} 
            gapBetween={20} 
            itemWidth={200} 
            fill={fill}
        />
    );
};

export default ClientLogoMarquee;