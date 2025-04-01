'use strict';
const {
  Model, DataTypes
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Employee.init({
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    jobtitle: DataTypes.STRING,
    streetline1:DataTypes.STRING,
    streetline2:DataTypes.STRING,
    city:DataTypes.STRING,
    state:DataTypes.STRING,
    zip:DataTypes.INTEGER,
    phonenumber:DataTypes.INTEGER,
    yearhired:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Employee',
    tableName: 'employee',
    timestamps: false
  });
  return Employee;
};