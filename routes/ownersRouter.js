const express = require('express');
const router = express.Router();
const ownerModel = require('../models/owner-model');
router.get('/', (req, res) => {
  res.send('iam from owner router');
});

// create a owner
router.post('/create', async (req, res) => {
  const { fullname, email, password, products, picture, gstin } = req.body;
  let owners = await ownerModel.find();
  if (owners.length > 0) {
    return res
      .status(503)
      .send('You dont have permission to create a new owner');
  }
  let createdOwner = await ownerModel.create({
    fullname,
    email,
    password,
  });
  res.status(203).send(createdOwner);
});

module.exports = router;
