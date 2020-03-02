module.exports = function(sequelize, DataTypes) {

    const User = sequelize.define("User", {
        email: {
            id: AUTO_INCREMENT,
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    // Review.associate = function(models) {
    //     Review.belongsTo(models.User, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // };

    return User;
};