module.exports = function(sequelize, DataTypes) {
    const Comment = sequelize.define("Comment", {
        comment: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });

    // Review.associate = function(models) {
    //     Review.belongsTo(models.User, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // };

    return Comment;
};