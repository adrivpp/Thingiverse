'use strict';

const thingReducer = (thing) => {
    const { creator } = thing;
    return {
        id: thing.id || 0,
        name: thing.name,
        image: thing.thumbnail,
        creator: {
            id: creator.id,
            firstName: creator.first_name,
            image: creator.thumbnail,

        }
    };
}

module.exports = thingReducer;