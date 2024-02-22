module.exports = (sequelize, Sequelize) => {
    // TODO redefine emoji based on data shape

    const Emoji = sequelize.define("emoji", {
      id: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      names: {
        type: Sequelize.STRING
      },
      imgUrl: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Emoji;
  };