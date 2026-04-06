import { graphql } from '@/graphql/generated';

export const ABOUT_CONTENT = graphql(`
    query AboutContent($format: PostObjectFieldFormatEnum=RAW) {
        aboutContents {
            edges {
                node {
                    mainContent(format:$format)
                    boxOneContent(format:$format)
                    boxThreeContent(format:$format)
                    boxThreeTitle
                    boxOneTitle
                    boxTwoContent(format:$format)
                    boxTwoTitle
                    highlights(format:$format)
                }
            }
        }
    }
`);

