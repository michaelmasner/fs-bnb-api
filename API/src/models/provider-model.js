var mysqlConn = require("../database/database");

const fs = require("fs");

const roles = {
    ADMIN: "admin",
    PROVIDER: "provider",
    USER: "user"
  };
module.exports = class Provider {
    constructor(newName, newSurname, newCellphone, newEmail, newPassword) {
        this.name = newName;
        this.surname = newSurname;
        this.cellphone = newCellphone;
        this.email = newEmail;
        this.password = newPassword;
        this.role = roles.PROVIDER;

    }
    create(obj) {
        return new Promise((resolve, reject) => {
            mysqlConn.query("INSERT INTO provider set ?", obj, (err, res) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(res);
                }
            });
        });
    }

    getAll(){
        return new Promise((resolve, reject) =>{
            mysqlConn.query("Select * from provider", (err, res) => {
                if(err){
                    reject(err);
                } else{
                    resolve(res);
                }
            });
        });
    }
    getById(id){
        return new Promise((resolve, reject) => {
            mysqlConn.query("Select * from provider where id = ? ", id, (err, res) => {
                if(err){
                    reject(err);
                } else{
                    resolve(res);
                }
            });
        });
    }
    updateByID(userId, user) {
        return new Promise((resolve, reject) => {
          mysqlConn.query(
            "UPDATE provider SET name = ?, surname = ?, cellphone = ?, email = ?, password = ?, role = ? WHERE id = ?",
            [
              user.name,
              user.surname,
              user.cellphone,
              user.email,
              user.password,
              user.role,
              userId
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
    remove(id){
        return new Promise((resolve, reject) => {
            mysqlConn.query("DELETE FROM provider WHERE id = ?", id, (err, res) => {
                if(err){
                    reject(err);
                } else{
                    resolve(res);
                }
            })
        })
    }
};