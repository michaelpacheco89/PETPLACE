module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name:{
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        isAlphanumeric:true
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isAlphanumeric: true,
        len: [1]
      }
    },
    Address: {
        type: DataTypes.TEXT,
        allowNull: true,
        validate:{
            len: [10]
        }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
        len: [1]
      }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          // isAlphanumeric: true,
          len: [1]
        }
      }
    });

  User.associate = function(models){
    //adds association with Pawfile table
     User.hasMany(models.Pawfile, {
       as: "OwnedPawfiles",
       onDelete: "cascade",
       foreignKey: {
         name: "OwnerId"
       }
    });
  };
  return User;
};
