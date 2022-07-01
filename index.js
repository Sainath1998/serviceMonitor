const app = require('./express/app');
const sequelize = require('./sequelize/index');
const logger = require('./express/config/loggin/config')

async function asertdatbaseConnection(){
    try {
        await sequelize.authenticate();
        await sequelize.sync({alter:false});
    } catch (error) {
        console.log(error);
    }
}

async function init(){
    await asertdatbaseConnection();
    app.listen(3000,()=>{
        logger.info('The app is running on port 3000')
    });
}

init();