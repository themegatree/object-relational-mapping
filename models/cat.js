const cat = (sequelize, DataTypes) => {
  const Cat = sequelize.define('cat', {
    name: {
      type: DataTypes.STRING(60)
    },
    breed: {
      type: DataTypes.STRING(60)
    },
    owner: {
      type: DataTypes.STRING(60)
    }
  }, {
    timestamps: false
  });

  return Cat;
};

module.exports = cat
