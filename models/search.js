module.exports = function (sequelize, DataTypes) {
    const Search = sequelize.define("Search", {
        number: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        prefix: {
            type: DataTypes.STRING,
            allowNull: true
        },
        street: {
            type: DataTypes.STRING,
            allowNull: true
        },
        type: {
            type: DataTypes.STRING,
            allowNull: true
        },
        city: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        state: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        zip: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    });
    return Search;
};