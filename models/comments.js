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
            onDelete: "cascade",
            allowNull: true,
            primaryKey: true
        });
    };
    return Comments;
};
