var express = require('express');
var router = express.Router();
var  profileModel = require('../models/profiles.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
  profileModel.all()
    .then(function(data){
      // profileModel.listProfiles(data)
      res.render('profiles')
    })

});

module.exports = router;
