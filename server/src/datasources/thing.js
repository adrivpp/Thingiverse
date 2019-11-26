'use strict';

const { RESTDataSource } = require('apollo-datasource-rest');

class ThingAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://thingiverse/developers';
    }

    async getAllThings() {

    }

    async getThingById({ thingId }) {

    }
}

module.exports = ThingAPI;