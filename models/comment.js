// module.exports = function(sequelize, DataTypes) {
//     const Review = sequelize.define("Review", {
//         address: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//         rating: {
//             type: DataTypes.INTEGER,
//             allowNull: false
//         },
//         review: {
//             type: DataTypes.STRING,
//             allowNull: true
//         }
//         // user_id: {
//         //     type: DataTypes.INTEGER,
//         //     allowNull: false,
//         //     references: {
//         //         model: "User",
//         //         key: "id"
//         //     }
//         // }
//     });

//     Review.associate = function(models) {
//         Review.belongsTo(models.User, {
//             foreignKey: {
//                 allowNull: false
//             }
//         });
//     };

//     return Review;
// };

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