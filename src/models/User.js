import {DataTypes} from 'sequelize';
import Sequelize from 'sequelize'
import {dbConfig} from '../config/database'

// const sequelize = db.connection;
const {database, username, password, host, dialect} = dbConfig

const sequelize = new Sequelize(database, username, password, {
    host,
    dialect,
    port: 3306,
});

export default sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    timestamps: true,
    underscored: true, 
    tableName: 'user',
    indexes: [
      { unique: true, fields: ['name'] },
    ]
  });

  