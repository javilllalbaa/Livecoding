const { Router } = require("express");
const app = new Router();
const baseURL = "https://api.chucknorris.io/jokes/random";

module.exports.app = app;
module.exports.baseURL =baseURL;
