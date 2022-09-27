const mongoose = require("mongoose")
const Data = require("../models/Data")

module.exports = {
    getData: async(req, res) => {
        try {
            const databaseItems = await Data.find({userId: req.user.id})
            
            //render data page with user and database items
            res.render("data.ejs", {user: req.user, data: databaseItems})
        }
        catch(err) {
            console.error(err)
        }
    },

    addDataPage: async(req, res) => {
        try {
            res.render("add.ejs", {user: req.user})
        }
        catch(err) {
            console.error(err)
        }
    },

    addData: async(req, res) => {
        try {
            //add document based on form input
            await Data.create({
                item: req.body.item,
                userId: req.user.id
            })

            //send user back to data page
            res.redirect("/data")
        }
        catch(err) {
            const validationErrors = []
            if(req.body.item == "") validationErrors.push({msg: "Please enter an item"})

            if(validationErrors.length) {
                req.flash("errors", validationErrors)
                return res.redirect("/data/add")
            }
        }
    },

    editDateaPage: async(req, res) => {
        try {
            //get exercise list and request id
            const id = req.params.id
            const databaseItems = await Data.find()

            //send above info to edit page
            res.render("edit.ejs", {user: req.user, data: databaseItems, dataId: id})
        }
        catch(err) {
            console.error(err)
        }
    },

    editData: async(req, res) => {
        try {
            //id of document
            const id = req.params.id

            //create new document based on form inputs
            await Data.findByIdAndUpdate(id, {
                item: req.body.item
            })

            //send user back to data page
            res.redirect("/data")
        }
        catch(err) {
            console.error(err)
        }
    },

    deleteData: async(req, res) => {
        try {
            //delete document with the id
            await Data.remove({ _id: req.params.id })
            
            //send user back to workouts page
            res.redirect("/data")
        }
        catch(err) {
            res.redirect("/data")
        }
    },
}