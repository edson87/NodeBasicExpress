"use strict";
const { Model } = require('sequelize');
const SequelizeSlugify = require('sequelize-slugify');

module.exports = (Sequelize, DataTypes) => {
  class author extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  author.init({
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    slug: DataTypes.STRING,
    is_deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    created_by: DataTypes.INTEGER,
    updated_by: DataTypes.INTEGER
  }, {
    //sequelize,
    //modelName: 'author',
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  });

  SequelizeSlugify.slugifyModle(author,{
    source: ['name']
  });

  return author;
};