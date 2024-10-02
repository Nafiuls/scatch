const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('iam from user router');
});

module.exports = router;
