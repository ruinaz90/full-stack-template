const mongoose = require("mongoose")
const Data = require("../models/Data")

module.exports = {
    //main page
    getIndex: (req, res) => {
        res.render('index.ejs')
    },

    //error page
    getError: (req, res) => {
        res.render('error.ejs')
    },
}