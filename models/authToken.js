module.exports = (sequelize, DataTypes) => {

    const AuthToken = sequelize.define('AuthToken', {
      token: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    }, {});
  
    // set up the associations so we can make queries that include
    // the related objects
    AuthToken.associate = function({ Stupid }) {
      AuthToken.belongsTo(Stupid);
    };
  
    // generates a random 15 character token and
    // associates it with a Stupid
    AuthToken.generate = async function(StupidId) {
      if (!StupidId) {
        throw new Error('AuthToken requires a Stupid ID')
      }
  
      let token = '';
  
      const possibleCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
        'abcdefghijklmnopqrstuvwxyz0123456789';
  
      for (var i = 0; i < 15; i++) {
        token += possibleCharacters.charAt(
          Math.floor(Math.random() * possibleCharacters.length)
        );
      }
  
      return AuthToken.create({ token, StupidId })
    }
  
    return AuthToken;
  };