import Sequelize, { Model } from 'sequelize';

class File extends Model {
  static init(sequelize) {
    // VIRTUAL -> campo que nunca vai existir na base de dados, apenas no código
    super.init(
      {
        name: Sequelize.STRING,
        path: Sequelize.STRING,
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `http://localhost:3333/files/${this.path}`;
          },
        },
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default File;
