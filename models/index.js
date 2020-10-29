const connection = require("../config/connection");
const Cat = require("./cat.model");
module.exports = {
    Cat: new Cat(connection)
}