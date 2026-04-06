import { graphql } from '@/graphql/generated';

export const SPEAKING_KEYNOTES = graphql(`
    query SpeakingKeynotes($format: PostObjectFieldFormatEnum = RAW) {
        speakingKeynotes {
            edges {
                node {
                    subtitle
                    mainContent
                    timeNeeded
                    title
                    audience(format: $format)
                }
            }
        }
    }
`);