/********************************************************************
 Use this class to massage the data pulled from the db
 --this logic should always be separate from actual db call
 because there may be different uses for the data...
 *********************************************************************/


module.exports = function () {
    // console.log("\r\nkitchen art-data init...");
    const kitchenArt = require('./kitchen-art.js');
    const art = new kitchenArt();

    const self = this;

    //   PUBLIC METHOD THAT GETS ALL KITCHEN ART
    self.getData = () => {
        return new Promise((resolve, reject) => {
            // console.log("getData()...");

            getKitchenArt()
            .then((resp) => {
                resolve(resp);
            })
            .catch((err) => {
                //no need to bubble up error to client
                //...just log to server console
                console.log("err in art-data.getData():\t" + err);

                reject();
            });
        });
    };


    /// PRIVATE METHOD
    let getKitchenArt = () => {

        return new Promise((resolve, reject) => {
            console.log("\r\ngetting kitchen art");

            let data = {};

            art.get()
                .then((resp) => {
                    let data = resp;
                    let tempData = resp;    //for double check

                    //attempt sort of JsonArray items by type
                    try {
                        tempData.sort(sortJsonByKey("type"));

                        //probably want to get count here for double check?
                        // console.log("kitchen art filter:\t" + data.length + ">>\t" + tempData.length);

                        data = tempData;
                    }
                    catch (e) {
                        console.log("err in getKitchenArt).dataSort:\t" + e);
                    }

                    resolve(data);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    };

};