import type { CodegenConfig } from '@graphql-codegen/cli';
import { URLS } from './src/constants';
import dotenv from 'dotenv';

dotenv.config();

const config: CodegenConfig = {
    schema: [
        {
            [`${URLS.GRAPHQL_API_URL}`]: {
                headers: {
                    Authorization: `Basic ${Buffer.from(`${process.env.WP_ADMIN_USERNAME}:${process.env.WP_APP_PASSWORD}`).toString("base64")}`
                }
            }
        }
    ],
    documents: ['src/**/*.{ts,tsx}'],
    ignoreNoDocuments: true,
    generates: {
        './src/graphql/generated/': {
            preset: 'client',
            presetConfig: {
                fragmentMasking: false
            }
        }
    },
};

export default config;