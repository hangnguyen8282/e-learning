import fs from 'fs'
import path from 'path'
import Sequelize from 'sequelize'

import db from '../config/database'

const sequelize = db.connection;

// turns base_user => BaseUser
function toCamelCase (str) {
  const _ = str.indexOf("_");
  if (~_) {
    return toCamelCase(str.substring(0, _) 
        + str.substring(_ + 1)
          .substring(0, 1)
          .toUpperCase() 
        + str.substring(_ + 2)
    )
  }
  else {
    return str.substring(0, 1).toUpperCase() + str.substring(1);
  }
}

let models = {};
let modelsLoaded = false;

const createModels = () => {
  if (modelsLoaded) return models;

  // Get all models
  const modelsList = fs.readdirSync(path.resolve(__dirname, "./"))
    .filter((t) => (~t.indexOf('.js')) && !~t.indexOf("index"))
    .map((file) => {
      const model = require(__dirname + '/' + file).default(sequelize)
      return model;
    })

  for (let i = 0; i < modelsList.length; i++) {
    const modelName = toCamelCase(modelsList[i].name);
    models[modelName] = modelsList[i];
  }

  // Create the relationships for the models;
  Object.keys(models).forEach((modelName) => {
    if (models[modelName].associate) {
      models[modelName].associate(models);
    }
  });

  console.log(models.User.findOne())

  models['sequelize'] = sequelize;
  models['Sequelize'] = Sequelize;

  modelsLoaded = true;

  return models;
}

export default createModels();

export {
  createModels
}