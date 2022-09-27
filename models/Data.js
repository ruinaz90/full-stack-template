const mongoose = require("mongoose")

const DataSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
})

module.exports = mongoose.model('Data', DataSchema)