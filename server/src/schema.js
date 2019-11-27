'use strict';

const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        things: [Thing]!
        thing(id: ID!): Thing
    } 

    type Mutation {
        exchangeCode(code: String!): String
    }

    type Thing {
        title: String!
    }
`;

module.exports = typeDefs;