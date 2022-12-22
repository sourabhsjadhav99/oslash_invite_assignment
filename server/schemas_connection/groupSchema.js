const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    name: { type: String },
    email: { type: String },
    group: { type: String },
    members: { type: String }

});

module.exports = mongoose.model("getUser", productSchema);