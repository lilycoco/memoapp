const router = require('express').Router();

let data = []

router.get('/data',(req, res) => {
  res.json(data);
});

router.post('/data',(req, res) => {
  data = req.body
  res.json(data);
});

module.exports = router;
