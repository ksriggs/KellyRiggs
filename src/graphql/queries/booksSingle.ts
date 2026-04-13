import { graphql } from '@/graphql/generated';

export const BOOKS_SINGLE = graphql(`
    query BooksSingle($id: ID!, $idType: BookIdType = SLUG, $format: PostObjectFieldFormatEnum = RAW) {
        book(id: $id, idType: $idType) {
            slug
            description(format: $format)
            secondDescription(format: $format)
            shopUrl
            subtitle
            title
            takeAways(format: $format),
            coverImage {
                node {
                    mediaItemUrl
                }
            }
        }
    }
`);