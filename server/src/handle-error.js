'use strict';

const { AuthenticationError, ForbiddenError, ApolloError  } = require('apollo-server-express');

const handleError = (error) => {
    switch (error.extensions.code) {
        case 'UNAUTHENTICATED':
            return new AuthenticationError('You need to be logged in');
        case 'FORBIDDEN':
            return new ForbiddenError('Authentication failed');
        case 'INTERNAL_SERVER_ERROR':
            return new ApolloError('Internal server error, try again');
        default:
            return error;
    }
}

module.exports = handleError;