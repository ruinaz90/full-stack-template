const express = require("express")
const router = express.Router()
const dataController = require("../controllers/data")
const { ensureAuth } = require("../middleware/auth")

//READ
router.get("/", ensureAuth, dataController.getData)

//CREATE
router.get("/add", dataController.addDataPage)
router.post("/add-data", dataController.addData)


//UPDATE
router.get("/edit/:id", dataController.editDateaPage)
router.post("/edit/:id", dataController.editData)

//DELETE
router.delete("/delete/:id", dataController.deleteData)

module.exports = router