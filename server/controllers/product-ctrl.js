const ArtModel = require('../lib/art-model.js');
const ArtData = require('../lib/art-data.js');
let artData = new ArtData();


//not gonna use server side!
// getArtByKey = (req, res) => {
//     artData.getDataBykey(req.params.id)
//         .then((json) => {
//             return res
//                 .status(200)
//                 .json({ success: true, data: json });
//         })
//         .catch((err) => {
//             console.log(err);
//             return res
//                 .status(404)
//                 .json({ success: false, error: `Product not found!` })
//         });
// };


//get all art and store in array in client-side Vuex: store.js
getAllArt = async (req, res) => {
    artData.getData()
        .then((resp) => {
            return res.status(200).json({
                success: true,
                data: resp //array of json objects
            });
        })
        .catch((err) => {
            //should only fail on code changes and (db is empty)
            return res.status(404).json(
                { success: false, error: `Products not found` });
        });
};

module.exports = {
    getAllArt
}