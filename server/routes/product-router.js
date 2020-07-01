const express = require('express');

const kArtCtrl = require('../controllers/product-ctrl');

const router = express.Router();

//not using this on server side, will do on client side with store.js
// router.get('/kitchenart/:id', kArtCtrl.getArtByKey);

router.get('/kitchenart', kArtCtrl.getAllArt);

module.exports = router;