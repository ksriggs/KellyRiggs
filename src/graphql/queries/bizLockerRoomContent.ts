import { graphql } from '@/graphql/generated';

export const BIZ_LOCKER_ROOM_CONTENT = graphql(`
    query BizLockerRoomContent {
        bizLockerRoomContents {
            edges {
            node {
                sectionContent
            }
            }
        }
    }
`);