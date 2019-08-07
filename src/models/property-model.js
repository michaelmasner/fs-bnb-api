var mysqlConn = require("../database/database");

const fs = require("fs");

module.exports = class Property {
  constructor(newName, newLocation, newImgUrl, newPrice, newProviderId) {
    this.name = newName;
    this.location = newLocation;
    this.imageUrl = newImgUrl;
    this.price = newPrice;
    this.providerId = newProviderId;
  }
  create(property) {
    return new Promise((resolve, reject) => {
      mysqlConn.query("INSERT INTO property set ?", property, (err, res) => {
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
      mysqlConn.query("Select * from property", (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }
  getByProviderId(id) {
    return new Promise((resolve, reject) => {
      mysqlConn.query(
        "Select * from property where providerId = ? ",
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
  getById(id) {
    return new Promise((resolve, reject) => {
      mysqlConn.query(
        "Select * from property where id = ? ",
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
  updateByID(Id, listing) {
    return new Promise((resolve, reject) => {
      mysqlConn.query(
        "UPDATE property SET name = ?, location = ?, imageUrl = ?, price = ?, providerId = ? WHERE id = ?",
        [listing.name, listing.location, listing.imageUrl, listing.price, listing.providerId, Id],
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
      mysqlConn.query("DELETE FROM property WHERE id = ?", id, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }
};
