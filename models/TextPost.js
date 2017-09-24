module.exports = function(sequelize, DataTypes) {
  var TextPost = sequelize.define("TextPost", {

    text: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    }

    });
  TextPost.associate = function(models)
  {
    //adds association with User model via unique email.
     TextPost.belongsTo(models.Pawfile, {
       foreignKey: {
         allowNull: false
       }
    });

    //adds association to Pictures table
    TextPost.hasMany(models.Comments, {
      onDelete: "cascade"
    });

  }
  return TextPost;
};
