const express = require('express');
const router = express.Router();
const handlers = require('../handlers/handlers')
const adminHandlers = require('../handlers/admin')

//home-page
router.get('/webmarket', handlers.verifyToken, (req, res) => {
    handlers.webmarket(req, res)
});

//Admin
router.get('/admin', (req, res) => {
    adminHandlers.admin(req, res)
});

router.post('/addProducts', (req, res) => {
    adminHandlers.addProducts(req, res)
})

//register
router.post('/register', (req, res) => {
    handlers.register(req, res)
})

//login
router.post('/login', (req, res) => {
    handlers.login(req, res)
});



module.exports = router;