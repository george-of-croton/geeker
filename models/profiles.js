'use strict'
var Knex = require('knex')
var knexConfig = require('../knexfile.js')

var knex = Knex(knexConfig[process.env.NODE_ENV || 'development'])


var profile = {

 all: function()  {
   return knex.select().table('profiles')
  },

  listProfiles: function(profile){
    profiles.forEach(function (profile) { console.log(profile.name) })
  },

  closeDB: function(){
    knex.destroy()
  }

}

module.exports =  profile
