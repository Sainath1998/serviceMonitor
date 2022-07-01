const {DataTypes} = require('sequelize')

module.exports = (sequelize)=>{
    sequelize.define('projects',{
        project_name:{
            allowNull:false,
            type:DataTypes.STRING
        },
        service_count:{
            allowNull:false,
            type:DataTypes.STRING
        }
    })
}