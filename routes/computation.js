var express = require('express');
var router = express.Router();
var rno;
var cos;
var asin;
var asinh;

/* GET users listing. */
router.get('/', function(req, res, next) {
    rno = Math.random();
    cos = Math.cos(rno);
    asin = Math.asin(rno);
    // asin = Math.asin(rno);
    asinh = Math.asinh(rno);
    res.send(`cos applied to ${rno} is ${cos} <br> 
              asin applied to ${rno} is ${asin} <br>
              asinh applied to ${rno} is ${asinh}`);
});

module.exports = router;
