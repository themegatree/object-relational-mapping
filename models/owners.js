const owners = (sequelize, DataTypes) => {
    const Owners = sequelize.define('owners',{
        name: {
            type: DataTypes.STRING(60)
        },
        dogOwner: {
            type: DataTypes.BOOLEAN
        },
        DofB: {
            type: DataTypes.DATEONLY
        }  
    });
    return Owners;
}

module.exports = owners;