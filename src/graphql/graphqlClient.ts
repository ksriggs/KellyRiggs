import { print, type DocumentNode } from 'graphql';

import { GraphQLClient } from 'graphql-request';
import { GRAPHQL_API_URL } from '@/constants/urls';

export const client = new GraphQLClient(GRAPHQL_API_URL);

export function gqlRequest<TResult, TVariables extends object>(
    query: DocumentNode | unknown,
    variables?: TVariables
): Promise<TResult> {
    const parsedQuery = typeof query === "string" ? query : print(query as DocumentNode);
    return client.request(parsedQuery, variables);
};