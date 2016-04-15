import Knex from 'knex'
import knexConfig from '../knexfile.js'

var knex = Knex(knexConfig[process.env.NODE_ENV || 'development'])


class Profile {

  static all() {
   return knex.select().table('profiles')
  }

  static listProfiles(profiles) {
    profiles.forEach(function (profile) { console.log(profile.name) })
  }

  static searchUsers () {
    return knex('users').where({
      name: 'george'
    }).select('id')
  }

  static closeDB(){
    knex.destroy()
  }

}

export default Profile
