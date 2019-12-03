'use strict';

const { UserInputError  } = require('apollo-server-express');

module.exports = {
    Query: {
        things: async (_, { category }, { dataSources, headers }) => {
            if (category === 'popular' || category === 'newest' || category === 'featured') {
                const allThings = await dataSources.thingAPI.getAllThings({ headers, category });
                allThings.reverse();
                return allThings;
            } 

            throw new UserInputError('This category does not exist, try changing your search');
        },
        thingById: async (_, { thingId }, { dataSources, headers }) => {
            const thing = await dataSources.thingAPI.getThingById({ thingId, headers });
            return thing;
        }
    },

    Mutation: {
        exchangeCode: async (_, { code }, { dataSources }) => {
            const token = await dataSources.authAPI.exchangeCode({ code });
            return token;
        }
    }
}