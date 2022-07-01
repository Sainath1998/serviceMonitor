const{DataTypes} = require('sequelize');

module.exports = (sequelize)=>{
    sequelize.define("services",{
        service_name:{
            allowNull:false,
            type:DataTypes.STRING
        },
        service_link:{
            allowNull:false,
            type:DataTypes.STRING
        },
        current_status:{
            allowNull:false,
            type:DataTypes.BOOLEAN
        },
        success_count:{
            allowNull:false,
            type:DataTypes.INTEGER
        },
        failure_count:{
            allowNull:false,
            type:DataTypes.INTEGER
        },
        failure_time:{
            allowNull:false,
            type:DataTypes.DATE
        }

    })
}