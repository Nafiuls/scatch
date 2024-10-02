const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('iam from owner router');
});

module.exports = router;
