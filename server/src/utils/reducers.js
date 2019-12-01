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

const thingDetailsReducer = (thing) => {
    return {
        ...thingReducer(thing),
        added: thing.added || '',
        likes: thing.like_count || 0,
        collectCount: thing.collect_count || 0,
        defaultImage: thing.default_image.url,
        details: thing.details || '',
        downloadCount: thing.download_count || 0,
        viewCount: thing.view_count || 0,
        images: thing.images
    }
}

const imageReducer = (image) => {
    return {
        url: image.sizes[0].url
    }
}

module.exports = { thingReducer, thingDetailsReducer, imageReducer };