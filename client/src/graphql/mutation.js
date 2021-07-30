import { gql } from 'graphql-request';
export const REGISTER_USER = gql`
  mutation createUser(
    $firstName: String
    $lastName: String
    $phone: String
    $email: String!
    $password: String!
  ) {
    createUser(
      userInput: {
        firstName: $firstName
        lastName: $lastName
        email: $email
        password: $password
        phone: $phone
      }
    ) {
      _id
    }
  }
`;

export const CREATE_EVENT = gql`
  mutation CreateEvent(
    $title: String!
    $desc: String!
    $price: Float!
    $date: String!
  ) {
    createEvent(
      eventInput: {
        title: $title
        description: $desc
        price: $price
        date: $date
      }
    ) {
      _id
      title
      description
      date
      price
    }
  }
`;
