const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth') 
const homeController = require('../controllers/home')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

//main page
router.get('/', homeController.getIndex)

//main page
//router.get('/error', homeController.getError)

//log in
router.get('/login', authController.getLogin)
router.post('/login', authController.postLogin)

//log out
router.get('/logout', authController.logout)

//create account
router.get('/signup', authController.getSignup)
router.post('/signup', authController.postSignup)

module.exports = router