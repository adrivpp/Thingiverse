'use strict';

require('dotenv').config();
const { RESTDataSource } = require('apollo-datasource-rest');
const thingReducer = require('../utils/thingReducer');

class ThingAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.API_URL;
    }

    async getAllThings({ token, category }) {
        const response = await this.get(`${category}`, undefined, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return Array.isArray(response)
            ? response.map(thing => thingReducer(thing))
            : [];
    }

    async getThingById({ thingId, token }) {
        const thing = await this.get(`things/${thingId}`, undefined, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return thingReducer(thing);
    }
}

module.exports = ThingAPI;