const db = require("../config/db")
const { DataTypes } = require("sequelize");

const Model = db.pgConn.define("Model", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dateOfBirth: {
    type: DataTypes.DATEONLY,
  }
})

module.exports = Model;