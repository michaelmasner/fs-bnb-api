const Provider = require("../models/provider-model");

//var bcrypt = require("bcryptjs");

//var jwt = require('jsonwebtoken');

module.exports = class ProviderAuthService {
  constructor() {}

  // async hashPassword(password) {
  //   var salt = bcrypt.genSaltSync(10);
  //   return await bcrypt.hash(password, salt);
  // }
  async login(authProvider) {
    return new Promise((resolve, reject) => {
      Provider.prototype
        .getAll()
        .then(providers => {
          const dbProvider = providers.filter(provider => {
            return provider.email == authProvider.email;
          });
          if (dbProvider.length) {
            //const match = bcrypt.compare(dbUser[0].password, authUser.password);
            if (dbProvider[0].password == authProvider.password) {
              resolve(dbProvider[0]);
            } else {
              reject("Incorrect password.");
            }
          } else {
            reject("Email not found.");
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  async register(authProvider) {
    return new Promise((resolve, reject) => {
      Provider.prototype
        .getAll()
        .then(providers => {
          const dbProvider = providers.filter(provider => {
            return provider.email == authProvider.email;
          });
          if (dbProvider.length >= 1) {
            if (dbProvider[0].email == authProvider.email) {
              reject("User email is already taken. Try again.");
            }
          } else {
            // const passwordHash = hashPassword(authUser.password);
            // const userObj = {
            //   name: authUser.name,
            //   surname: authUser.surname,
            //   cellphone: authUser.cellPhone,
            //   email: authUser.email,
            //   password: passwordHash,
            //   role: authUser.role
            // };
            // const newUser = new User(userObj);
            Provider.prototype
              .create(authProvider)
              .then(user => resolve(user))
              .catch(err => reject(err));
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  }
  // async getJwtToken(user, rememberUser){
  //   let jwtObject = {};
  //   jwtObject.id = user.id;
  //   jwtObject.name = user.name;
  //   jwtObject.surname = user.surname;
  //   jwtObject.cellPhone = user.cellPhone;
  //   jwtObject.email = user.email;
  //   jwtObject.role = user.role;
  //   jwtObject.remember = user.rememberUser;

  //   return await jwt.sign(Object.assign({}, jwtObject), "secret key",{
  //     expiresIn: "1d"
  //   });
  // }

  // async verifyToken(){
  //   return await jwt.verify(token, "secret key");
  // }
};


