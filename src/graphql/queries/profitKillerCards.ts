import { graphql } from '@/graphql/generated';

export const PROFIT_KILLER_CARDS = graphql(`
    query ProfitKillerCards($format: PostObjectFieldFormatEnum = RAW) {
        profitKillerCards {
            edges {
                node {
                    bottomContent(format: $format)
                    buttonUrl
                    buttonTitle
                    title
                    topContent(format: $format)
                    highlightedContent(format: $format)
                }
            }
        }
    }
`);