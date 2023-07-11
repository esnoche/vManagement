const mongose = require("mongoose");

const adminSchema = new mongose.Schema({
    email: String,
    password: String
})

const adminModel = mongose.model("admin", adminSchema, "admins");
module.exports = adminModel;