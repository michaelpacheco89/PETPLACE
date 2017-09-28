module.exports = function(sequelize, DataTypes) {
  var Pawfile = sequelize.define("Pawfile", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        // isAlpha: true,
        len: [1]
      }
    },

    species: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isAlpha: true,
          len: [1]
        }
      },

    breed: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isAlpha: true,
        len: [1]
      }
    },

    sex: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isAlpha: true,
        len: [1]
      }
    },

    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        // isNumeric: true,
        len: [1]
      }
    },

    profPic: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "/assets/images/anon.jpg"
    }

    });
  Pawfile.associate = function(models){
    //adds association with User model via unique email.
     Pawfile.belongsTo(models.User, {
       foreignKey:{
         allowNull: false
       },
       onDelete: "cascade"
    });

    //adds association to Pictures table
    Pawfile.hasMany(models.Post, {
      onDelete: "cascade"
    });

  };
  return Pawfile;
};
