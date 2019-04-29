const mongoose = require("mongoose");

const todoscema = mongoose.Schema({
  title: { type: String, required: true },
    name: {type: String, required: true},
    date: {type: String, required: true}
});

module.exports = mongoose.model("todolist", todoscema);
 