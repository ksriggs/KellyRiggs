import { graphql } from '@/graphql/generated';

export const BOOKS_LIST = graphql(`
    query BooksList($format: PostObjectFieldFormatEnum = RAW) {
        books {
            edges {
                node {
                    description(format: $format)
                    secondDescription(format: $format)
                    shopUrl
                    slug
                    subtitle
                    takeAways(format: $format)
                    title
                    coverImage {
                        node {
                            mediaItemUrl
                        }
                    }
                }
            }
        }
    }
`);

