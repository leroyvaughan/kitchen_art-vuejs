const ArtModel = require('../../server/lib/art-model');


exports.mockDataCall = (req, res) => {
  const createdModel = ArtModel.create(req.body);
  res.status(200).json(createdModel);
};