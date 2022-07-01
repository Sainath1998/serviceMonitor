
function appyExtraSetup(sequelize){
    const {services,projects} = sequelize.models
    projects.hasMany(services)
    services.belongsTo(projects)
}

module.exports = {appyExtraSetup}