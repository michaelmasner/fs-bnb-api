var mysqlConn = require("../database/database");

const fs = require("fs");

const roles = {
  ADMIN: "admin",
  PROVIDER: "provider",
  USER: "user"
};
module.exports = class User {
  constructor(newName, newSurname, newCellPhone, newEmail, newPassword) {
    this.name = newName;
    this.surname = newSurname;
    this.cellPhone = newCellPhone;
    this.email = newEmail;
    this.password = newPassword;
    this.role = roles.USER;
  }
  create(newUser) {
    return new Promise((resolve, reject) => {
      mysqlConn.query("INSERT INTO user set ?", newUser, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }

  getAll() {
    return new Promise((resolve, reject) => {
      mysqlConn.query("Select * from user", (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }
  getById(id) {
    return new Promise((resolve, reject) => {
      mysqlConn.query(
        "Select * from user where id = ? ",
        id,
        (err, res) => {
          if (err) {
            reject(err);
          } else {
            resolve(res);
          }
        }
      );
    });
  }
  updateByID(id, user) {
    return new Promise((resolve, reject) => {
      mysqlConn.query(
        "UPDATE user SET name = ?, surname = ?, cellphone = ?, email = ?, password = ?, role = ? WHERE id = ?",
        [
          user.name,
          user.surname,
          user.cellphone,
          user.email,
          user.password,
          user.role,
          id
        ],
        (err, res) => {
          if (err) {
            reject(err);
          } else {
            resolve(res);
          }
        }
      );
    });
  }
  remove(id) {
    return new Promise((resolve, reject) => {
      mysqlConn.query("DELETE FROM user WHERE id = ?", id, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }
};
