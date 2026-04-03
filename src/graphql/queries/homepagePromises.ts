import { graphql } from '@/graphql/generated';

export const HOMEPAGE_PROMISES = graphql(`
    query HomePagePromises($format: PostObjectFieldFormatEnum = RAW) {
        homePagePromises {
            edges {
                node {
                    title
                    mainContent(format: $format)
                }
            }
        }
    }
`);