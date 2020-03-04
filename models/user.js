const bcrypt = require("bcryptjs");

module.exports = function (sequelize, DataTypes) {
    const Stupid = sequelize.define("Stupid", {

        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },

        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: true
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    } 
    );
    // Review.associate = function(models) {
    //     Review.belongsTo(models.User, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // };

    // set up the associations so we can make queries that include
    // the related objects
    Stupid.associate = function (models) {
        Stupid.hasMany(models.AuthToken);
    };

    Stupid.prototype.checkPassword = function(password) {
        //console.log(this);
        console.log("PASSWORDS", password, this.password);
        return bcrypt.compare(password, this.password);
    }
    

//       // This is a class method, it is not called on an individual
//   // user object, but rather the class as a whole.
//   // e.g. User.authenticate('user1', 'password1234')
//   Stupid.authenticate = async function(email, password) {

//     const stupid = await User.findOne({ where: { email } });

//     // bcrypt is a one-way hashing algorithm that allows us to 
//     // store strings on the database rather than the raw
//     // passwords. Check out the docs for more detail
//     if (bcrypt.compareSync(password, stupid.password)) {
//       return stupid.authorize();
//     }

//     throw new Error('invalid password');
//   }



//     // in order to define an instance method, we have to access
//     // the User model prototype. This can be found in the
//     // sequelize documentation
    // Stupid.prototype.authorize = async function () {
    //     const { AuthToken } = sequelize.models;
    //     const stupid = this

    //     // create a new auth token associated to 'this' user
    //     // by calling the AuthToken class method we created earlier
    //     // and passing it the user id
    //     const authToken =  AuthToken.generate(this.id);

    //     // addAuthToken is a generated method provided by
    //     // sequelize which is made for any 'hasMany' relationships
    //      stupid.addAuthToken(authToken);
    //     return { stupid, authToken }
    // };


//     Stupid.prototype.logout = async function (token) {

//         // destroy the auth token record that matches the passed token
//         sequelize.models.AuthToken.destroy({ where: { token } });
//     };


    return Stupid;
};