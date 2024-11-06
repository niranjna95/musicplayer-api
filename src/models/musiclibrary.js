'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MusicLibrary extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MusicLibrary.init({
    title: DataTypes.STRING,
    artist: DataTypes.STRING,
    artwork: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    TrackTypeId: DataTypes.INTEGER,
    createdOn: DataTypes.DATE,
    updatedOn: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'MusicLibrary',
  });
  return MusicLibrary;
};