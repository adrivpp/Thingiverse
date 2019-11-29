'use strict';

require('dotenv').config();

const { RESTDataSource } = require('apollo-datasource-rest');

class AuthAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.AUTH_URL;
        this.clientId = process.env.CLIENT_ID;
        this.clientSecret = process.env.CLIENT_SECRET;
    }

    async exchangeCode({ code }) {
        const response = await this.post(
            `access_token?client_id=${this.clientId}&client_secret=${this.clientSecret}&code=${code}`
        );
        return response;
    }
}

module.exports = AuthAPI;