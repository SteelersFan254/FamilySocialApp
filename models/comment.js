module.exports = function(sequelize, DataTypes) {
    const Comment = sequelize.define("Comment", {
        comment: {
            type: DataTypes.STRING,
            allowNull: false
        }, firstName: {
            type: DataTypes.STRING,
            allowNull: false
        }, lastName: {
            type: DataTypes.STRING,
            allowNull: false
        }, StupidId: {
            type:DataTypes.INTEGER,
            allowNull: false
        }
    });

<<<<<<< HEAD

=======
    Comment.associate = function(models) {
        models.Comment.belongsTo(models.Stupid);
      };
      
    // Comment.associate = function({ Stupid }) {
    //     Comment.belongsTo(Stupid);
    //   };
>>>>>>> master

    // Review.associate = function(models) {
    //     Review.belongsTo(models.User, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // };

    return Comment;
};