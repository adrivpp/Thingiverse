'use strict';

module.exports = {
    Query: {
        things: async (_, { category }, { dataSources, token }) => {
            const allThings = await dataSources.thingAPI.getAllThings({ token, category });
            allThings.reverse();
            return allThings;
        },
        thingById: async (_, { thingId }, { dataSources, token }) => {
            const thing = await dataSources.thingAPI.getThingById({ thingId, token });
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