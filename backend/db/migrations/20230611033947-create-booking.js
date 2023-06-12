'use strict';
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bookings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      spotId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:'Spots',
          key:'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:'Users',
          key:'id'
        },
        onDelete:'cascade',
        onUpdate:'cascade'
      },
      startDate: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        isDate:true
      },
      endDate: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        isDate:true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
      }
    },options);
  },
  async down(queryInterface, Sequelize) {
    options.tableName = "Bookings";
    await queryInterface.dropTable('Bookings');
  }
};
