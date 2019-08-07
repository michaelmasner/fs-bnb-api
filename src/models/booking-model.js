var mysqlConn = require("../database/database");

const fs = require("fs");

module.exports = class Booking {
  constructor(newDateFrom, newDateTo, newUserId, newPropertyId, newStatus) {
    this.dateFrom = newDateFrom;
    this.dateTo = newDateTo;
    this.userId = newUserId;
    this.propertyId = newPropertyId;
    this.status = newStatus;
  }
  
  create(booking) {
    return new Promise((resolve, reject) => {
      mysqlConn.query("INSERT INTO bookings set ?", booking, (err, res) => {
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
      mysqlConn.query("Select * from bookings", (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }

  getByListingId(propertyId) {
    return new Promise((resolve, reject) => {
        mysqlConn.query("Select * from bookings where propertyId = ? ", propertyId, (err,res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    });
};
  getById(id) {
    return new Promise((resolve, reject) => {
      mysqlConn.query(
        "Select * from bookings where id = ? ",
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
  updateByID(id, obj) {
    return new Promise((resolve, reject) => {
      mysqlConn.query(
        "UPDATE bookings SET status = ? WHERE id = ?",
        [obj.status, id],
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
      mysqlConn.query("DELETE FROM bookings WHERE id = ?", id, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }
  removeByPropertyId(id){
    return new Promise((resolve, reject) => {
      mysqlConn.query("DELETE FROM bookings WHERE propertyId = ?", id, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }
};
