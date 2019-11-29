import gql from 'graphql-tag';

export const EXCHANGE_CODE = gql`
  mutation exchangeAuthCode($code: String!) {
    exchangeCode(code: $code)
  }
`;