/*==================================================
/database/models/Student.js

It defines the student model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

const Student = db.define("student", {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false,
    empty: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false,
    empty: false
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "/StudentPFP.jpg"
  },

  gpa: {
    type: Sequelize.DECIMAL(3,2),
    validate: {
      min: 0.0,
      max: 4.0,
    },
  },
});

// Export the student model
module.exports = Student;