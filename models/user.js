'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Course, {
        foreignKey: 'author_id',
        as: 'courses'
      });
      User.belongsToMany(models.Course, {
        as: 'followed_courses',
        through: 'FollowedCourses'
      });
      // define association here
    }
  };
  User.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName: { type: DataTypes.STRING, allowNull: false },
    username: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.STRING, allowNull: false, defaultValue: "STUDENT"},
    hash: { type: DataTypes.STRING, allowNull: false },
    email: { allowNull: false, type: DataTypes.STRING },
    createdAt: { allowNull: false, type: DataTypes.DATE },
    updatedAt: { allowNull: false, type: DataTypes.DATE }
  }, {
    sequelize,
    modelName: 'User',
    defaultScope: {
      attributes: { exclude: ['hash'] }
    },
    scopes: {
      withHash: { attributes: {}, }
    }
  });
  return User;
};
