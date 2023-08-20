var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  const data = new Date('2022-12-31');

  res.json({
    nome: 'Reveillon',
    data: data.toISOString(),
  });

});

module.exports = router;
