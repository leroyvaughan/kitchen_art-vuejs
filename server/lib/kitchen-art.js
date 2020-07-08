/********************************************************************
    Use this class to get the kitchen art data from db
      -- makes the actual db call
*********************************************************************/


module.exports = function () {
    const KitchenArt = require('./art-model.js');
    const self = this;

    self.get = function () {
        return _get();
    };


    let _get = function () {
        return new Promise((resolve, reject) => {
            // console.log("kitchen-art get()...");

            KitchenArt.find(
                {},
                {},

                (err, artData) => {
                    if (err) {
                        return reject("Err in kitchen-art:\t" + err);
                    }

                    if (isNull(artData)) {
                        return reject("no data");
                    }

                    var jsonData = JSON.stringify(artData);
                    return resolve(JSON.parse(jsonData));
                });
        });
    };


};