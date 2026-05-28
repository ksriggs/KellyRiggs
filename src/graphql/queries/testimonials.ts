import { graphql } from '@/graphql/generated';

export const TESTIMONIALS = graphql(`
    query Testimonials($format: PostObjectFieldFormatEnum = RAW) {
        testimonials {
            edges {
                node {
                    testimonialAuthor
                    testimonialAuthorTitle
                    testimonialAvatar {
                        node {
                            mediaItemUrl
                        }
                    }
                    testimonialContent(format: $format)
                    testimonialCategory {
                        node {
                            name
                        }
                    }
                }
            }
        }
    }
`);