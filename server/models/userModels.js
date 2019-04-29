const mongoose = require("mongoose");

const userscema = mongoose.Schema({
    name: {type: String, required: true},
});

module.exports = mongoose.model("user", userscema);
 