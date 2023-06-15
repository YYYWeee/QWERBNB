'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Booking.belongsTo(models.User,{
        foreignKey:'userId'
      });
      Booking.belongsTo(models.Spot,{
        foreignKey:'spotId'
      });

    }
  }
  Booking.init({
    spotId:
    {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userId:
    {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    startDate:
    {
      type: DataTypes.DATEONLY,
      allowNull: false,
      // isDate: true,

      validate: {
        isDate: {
          msg: 'StartDate is invalid, only allow date format'
        }
      }
    },
    endDate:
    {
      type: DataTypes.DATEONLY,
      allowNull: false,
      // isDate: true,
      validate: {
        isbeforeOrEqualToStartDate(value) {
          if (value <= this.startDate) {
            throw new Error('endDate cannot be on or before startDate')
          }
        },
        isDate: {
          msg: 'EndDate is invalid, only allow date format'
        }
      }

    }
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};
