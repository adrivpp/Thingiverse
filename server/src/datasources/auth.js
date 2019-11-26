'use strict';

const { RESTDataSource } = require('apollo-datasource-rest');

class AuthAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://www.thingiverse.com/login/oauth/authorize';
    }

    exchangeAccesToken() {

    }
}

module.exports = AuthAPI;