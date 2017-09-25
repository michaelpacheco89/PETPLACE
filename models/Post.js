module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {

    textContent: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    picContent: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    isProfile: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }

    });
  TextPost.associate = function(models)
  {
    //adds association with User model via unique email.
     Post.belongsTo(models.Pawfile, {
       foreignKey: {
         allowNull: false
       }
    });

    //adds association to Pictures table
    Post.hasMany(models.Comments, {
      onDelete: "cascade"
    });

  }
  return Post;
};
