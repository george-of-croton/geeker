var express = require('express');
var router = express.Router();
import profileModel from '../models/profiles.js'
console.log(profileModel)

/* GET users listing. */
router.get('/', function(req, res, next) {
  profileModel.all()
    .then(profileModel.listProfiles(){
      console.log(data)
      res.render('profiles')
    })

});

module.exports = router;
