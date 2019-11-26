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
        thing: (_, { id }, { dataSources }) =>
            dataSources.launchAPI.getThingById({ thingId: id }),
    },
}