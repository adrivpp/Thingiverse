'use strict';

const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        things(category: String!): [Thing]!
        thingById(thingId: ID!): Thing
    } 

    type Mutation {
        exchangeCode(code: String!): String
    }

    type Thing {
        id: ID!
        name: String!
        url: String!
        image: String!
        creator: Creator!
    }

    type Creator {
        firstName: String!
        image: String!
    }
`;

module.exports = typeDefs;