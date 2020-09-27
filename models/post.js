'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Post.belongsTo(models.Course, {
        as: 'course',
        foreignKey: 'id_course'
      });
      // define association here
    }
  };
  Post.init({
    id_post: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: {
      allowNull:false,
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};