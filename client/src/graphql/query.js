import { gql } from 'graphql-request';
export const LOGIN_QUERY = gql`
  query($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      userId
      token
    }
  }
`;

export const LOAD_USER_QUERY = gql`
  query {
    loadUser {
      _id
      firstName
      lastName
      phone
      email
    }
  }
`;

export const GET_EVENTS = gql`
  query {
    events {
      _id
      title
      description
      date
      price
      creator {
        _id
        email
      }
    }
  }
`;
