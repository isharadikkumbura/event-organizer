import { GraphQLClient } from 'graphql-request';

export const BASE_URL =
  process.env.NODE_ENV === 'production' ? 'production-url' : '/graphql';

export const useClient = () => {
  return new GraphQLClient(BASE_URL, {
    headers: { 'x-auth-token': `Bearer ${localStorage.getItem('token')}` },
  });
};
