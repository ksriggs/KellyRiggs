import { graphql } from '@/graphql/generated';

export const PODCAST_CONTENT = graphql(`
    query PodcastContent {
        podcastContents {
            edges {
                node {
                    description
                    descriptionCallout
                }
            }
        }
    }
`);