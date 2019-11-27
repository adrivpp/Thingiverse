'use sctrict';

require('dotenv').config();

const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const cors = require('cors');

const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const ThingAPI = require('./datasources/thing');
const AuthAPI = require('./datasources/auth');

const app = express();

app.use(
    cors({
        credentials: true,
        origin: [process.env.PUBLIC_DOMAIN],
    }),
);

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        thingAPI: new ThingAPI(),
        authAPI: new AuthAPI()
    })
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: process.env.PORT }, () => {
    console.log(`Apollo Server on http://localhost:${process.env.PORT}/graphql`);
});