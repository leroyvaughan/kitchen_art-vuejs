const express = require('express');

const artController = require('../controllers/product-ctrl');

const router = express.Router();

//not using this on server side, will do on client side with store.js
// router.get('/kitchenart/:id', kArtCtrl.getArtByKey);


//only getting all art as one json array for client side (VueJs)
router.get('/kitchenart', artController.getAllArt);

module.exports = router;