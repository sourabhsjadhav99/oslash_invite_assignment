const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    name: { type: String},
    email: { type: String},
    group: { type: String},
    members: { type: String},
   dropdown: { type: String},

});

module.exports = mongoose.model("newUser", productSchema);