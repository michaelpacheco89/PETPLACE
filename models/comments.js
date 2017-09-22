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
        Comments.belongsTo(models.Pictures, {
            foreignKey: {
                allowNull: false,
                primaryKey: true,
            }
        });

        Comments.belongsTo(models.Pawfile, {
            onDelete: "cascade",
            allowNull: false,
            primaryKey: true,
        });

        Comments.belongsTo(models.TextPost, {
            onDelete: "cascade",
            allowNull: false,
            primaryKey: true,
        });
    };
    return Comments;
};
