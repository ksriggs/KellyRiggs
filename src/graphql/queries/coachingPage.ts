import { graphql } from '@/graphql/generated';

export const COACHING_PAGE = graphql(`
    query CoachingPage($format: PostObjectFieldFormatEnum = RAW) {
        coachingKeynotes {
            edges {
                node {
                    subtitle
                    timeNeeded
                    title
                    audience(format: $format)
                    mainContent
                }
            }
        }
        coachingContents {
            edges {
                node {
                    questions(format: $format)
                    sectionTitle
                    sectionSubtitle(format: $format),
                    callToActionTitle
                }
            }
        }
    }    
`);