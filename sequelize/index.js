const Sequelize = require('sequelize')
require("custom-env").env(true);
const {appyExtraSetup} = require('./extra-setup')
const sequelize = new Sequelize(
    'servicemonitor',
    'root',
    'Sainath@123',
    {
      host: 'localhost',
      dialect:'mysql',
      dialectOptions: {
        useUTC: false, //for reading from database
      },
      timezone: "+05:30", // for writng
    }
  );

  const modelDefiners = [
    require('./models/project'),
    require('./models/services')
  ]

  for (const modelDefiner of modelDefiners) {
    modelDefiner(sequelize);
  }

  appyExtraSetup(sequelize)
  

module.exports = sequelize;