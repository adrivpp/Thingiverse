'use strict';

require('dotenv').config();
const { RESTDataSource } = require('apollo-datasource-rest');
const { thingReducer, thingDetailsReducer, imageReducer } = require('../utils/reducers');

class ThingAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.API_URL;
    }

    async getAllThings({ headers, category }) {
        const response = await this.get(`${category}`, undefined, {
            headers
        });
        return Array.isArray(response)
            ? response.map(thing => thingReducer(thing))
            : [];
    }

    async getThingById({ thingId, headers }) {
        const thing = await this.get(`things/${thingId}`, undefined, {
            headers
        });
        const images = await this.getImagesForThing({ thingId, headers });
        thing.images = images;
        return thingDetailsReducer(thing);
    }

    async getImagesForThing({ thingId, headers }) {
        const images = await this.get(`things/${thingId}/images`, undefined, {
            headers
        })
        return Array.isArray(images)
            ? images.map(image => imageReducer(image))
            : [];
    }
}

module.exports = ThingAPI;