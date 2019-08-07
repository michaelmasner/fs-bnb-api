const User = require("../models/user-model");

//var bcrypt = require("bcryptjs");

//var jwt = require('jsonwebtoken');

module.exports = class UserAuthService {

  // async hashPassword(password) {
  //   var salt = bcrypt.genSaltSync(10);
  //   return await bcrypt.hash(password, salt);
  // }
  async login(authUser) {
    return new Promise((resolve, reject) => {
      User.prototype
        .getAll()
        .then(users => {
          const dbUser = users.filter(user => {
            return user.email == authUser.email;
          });
          if (dbUser.length) {
            //const match = bcrypt.compare(dbUser[0].password, authUser.password);
            if (dbUser[0].password == authUser.password) {
              resolve(dbUser[0]);
            } else {
              reject("incorrect password");
            }
          } else {
            reject("user not found");
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  async register(authUser) {
    return new Promise((resolve, reject) => {
      User.prototype
        .getAll()
        .then(users => {
          const dbUser = users.filter(user => {
            return user.email == authUser.email;
          });
          if (dbUser.length == 1) {
            if (dbUser[0].email == authUser.email) {
              reject("User email is already taken. Try again.");
            }
          } else {
            User.prototype
              .create(authUser)
              .then(user => resolve(user))
              .catch(err => reject(err));
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  }
  
};


