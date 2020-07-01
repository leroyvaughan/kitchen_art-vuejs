const kitchenArt = require('./kitchen-art.js');


module.exports = function () {
    console.log("\r\nkitchen art-data init...");

    const self = this;
    let data = {};

    let art = new kitchenArt();



    //   PUBLIC METHOD THAT GETS ALL KITCHEN ART
    self.getData = () => {
        return new Promise((resolve, reject) => {
            console.log("getData()...");

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



    /// PRIVATE GET METHODS
    let getKitchenArt = () => {
        return new Promise((resolve, reject) => {
            console.log("\r\ngetting kitchen art");

            //set empty object, JIC
            data.art = [];

            art.get()
                .then((resp) => {

                    let data = resp;
                    let tempData = resp;    //for double check

                    //attempt sort of JsonArray items by type
                    try {
                        tempData.sort(sortJsonByKey("type"));
                    }
                    catch (e) {
                        console.log("err in getKitchenArt).dataSort:\t" + e);
                    }

                    //probably want to get count here for double check?
                    console.log("kitchen art filter:\t" + data.length + ">>\t" + tempData.length);

                    data = tempData;

                    resolve(data);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    };

};