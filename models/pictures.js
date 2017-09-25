module.exports = function(sequelize, DataTypes) {

    var Pictures = sequelize.define("Pictures", {
        title: {
            type: DataTypes.STRING,
            format: "jpg",
            allowNull: false,
            validate: {
                len: [1]
            }
        },

        isProfile: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false
        }
      },
    {
      timestamps: false
    });

    Pictures.associate = function(models) {
        Pictures.belongsTo(models.Pawfile, {
            foreignKey: {
                allowNull: false
            }
        });

        Pictures.hasMany(models.Comments, {
            onDelete: "cascade"
        });
    };
    return Pictures;
};
