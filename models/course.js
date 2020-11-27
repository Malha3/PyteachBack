'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Course.belongsTo(models.Category, {
        as: 'category',
        foreignKey: 'id_cat'
      });
      Course.belongsTo(models.User, {
        as: 'author',
        foreignKey: 'author_id'
      });
      Course.belongsToMany(models.User, {
        through: 'FollowedCourses',
        as: 'followers'
      });
      Course.hasMany(models.Article, {
        as: 'exercices',
        foreignKey: 'id_course'
      })
      // define association here
    }
  };
  Course.init({
    id_course: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    slug: { type: DataTypes.STRING, allowNull: false },
    tags: { type: DataTypes.STRING, allowNull: true, defaultValue: "Python" },
    published: { type: DataTypes.BOOLEAN }
  }, {
    sequelize,
    modelName: 'Course',
  });
  return Course;
};
