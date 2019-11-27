'use strict';

module.exports = {
    Query: {
        things: async (_, __, { dataSources }) => {
            const allThings = await dataSources.thingAPI.getAllThings();
            allThings.reverse();
            return {
                allThings,
            };
        },
        thing: async (_, { id }, { dataSources }) => {
            const thing = await dataSources.launchAPI.getThingById({ thingId: id });
            return {
                thing
            }
        }
    },

    Mutation: {
        exchangeCode: async (_, { code }, { dataSources }) => {
            const token = await dataSources.authAPI.exchangeCode({ code });
            return token;
        }
    }
}