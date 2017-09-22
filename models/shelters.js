module.exports = function(sequelize, DataTypes) {

    var Shelter = sequelize.define("Shelter", {
        Name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        Address: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate:{
                len: [10]
            }
        },
        Email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              isEmail:true
            }

        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
              isAlphanumeric: true
            }
        }
        // index: DataTypes.INTEGER
    });

    Shelter.associate = function(models) {
        Shelter.hasMany(models.Pawfile, {
            onDelete: "cascade",
            allowNull: false,
            primaryKey: true
        });

    };
    return Shelter;
};
