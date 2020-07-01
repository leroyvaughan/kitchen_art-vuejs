const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const KitchenArt = new Schema(
    {
        description: { type: String, required: true },
        filename: { type: String, required: true },
        height: { type: Number, required: true },
        price: { type: Number, required: true },
        rating: { type: Number, required: true },
        title: { type: String, required: true },
        type: { type: String, required: true },
        width: { type: Number, required: true }
    }
);

//setting database schema model. Params: (collectionName, schemaName)
module.exports = mongoose.model('kitchen_art', KitchenArt);