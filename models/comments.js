module.exports = function(sequelize, DataTypes) {

    var Comments = sequelize.define("Comments", {
        title: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                len: [1]
            }
        }
        // index: DataTypes.INTEGER
    });

    Comments.associate = function(models) {
        Comments.belongsTo(models.Post, {
            foreignKey: {
                allowNull: true
            },
            onDelete: "cascade"
        });

        Comments.belongsTo(models.Pawfile, {
          foreignKey: {
            allowNull: true
          },
          onDelete: "cascade"
        });
    };
    return Comments;
};
