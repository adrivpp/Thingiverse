import { ApolloProvider } from '@apollo/react-hooks';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import ReactDOM from 'react-dom';
import Pages from './pages';

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { resolvers, typeDefs } from './resolvers';


const cache = new InMemoryCache();
const link = new HttpLink({
    uri: 'http://localhost:4000/graphql',
    headers: {
        Authorization: localStorage.getItem('token'),
    }
});

cache.writeData({
    data: {
        isLoggedIn: !!localStorage.getItem('token'),
    }
})

const client = new ApolloClient({
    cache,
    link,
    typeDefs,
    resolvers
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <Router>
            <Pages />
        </Router>
    </ApolloProvider>, document.getElementById('root')
);
