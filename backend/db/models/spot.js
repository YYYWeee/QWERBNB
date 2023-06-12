'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Spot extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //option?
      // Spot.hasMany(models.Booking, {
      //   foreignKey: 'spotId',
      //   onDelete: 'cascade'
      // });
      Spot.belongsTo(models.User, {
        foreignKey: 'ownerId'
      });
      Spot.belongsToMany(models.User, {
        through: models.Booking,
        foreignKey: 'spotId',
        otherKey: 'userId'
      });
      Spot.hasMany(models.Review, {
        foreignKey: 'spotId',
        onDelete: 'cascade'
      });
      Spot.hasMany(models.SpotImage,{
        foreignKey: 'spotId',
        onDelete: 'cascade',
        // hooks:true,
        // as:'previewImage'
      })
    }
  }
  Spot.init({
    ownerId:
    {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    address:
    {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Street address is required'
        }
      }
    },
    city:
    {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'City is required'
        }
      }
    },
    state:
    {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'State is required'
        }
      }
    },
    country:
    {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Country is required'
        }
      }
    },
    lat:
    {
      type: DataTypes.DECIMAL
    },
    lng:
    {
      type: DataTypes.DECIMAL
    },
    name:
    {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Name is required'
        },
        len: {
          args: [1, 50], msg: 'Name must be less than 50 characters'
        }
      }
    },
    description:
    {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Description is required'
        }
      }
    },
    price:
    {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Price per day is required'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Spot',
  });
  return Spot;
};
