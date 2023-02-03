import 'dotenv/config'
import Sequelize from "sequelize";

export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "postgres",
    define: {
      hooks: {
        beforeCreate: (instance, options) => {
          console.log('--------------before Create log--------------');
          console.log('--------------options log--------------', options);
          console.log('--------------instance log--------------', instance);
          return null;
        },
        afterCreate: (instance, options) => {
          console.log('--------------after Create log--------------');
          console.log('--------------options log--------------', options);
          console.log('--------------instance log--------------', instance);
          return null;
        },
        beforeDestroy: async (instance, options) => {
          console.log('--------------before destroy log--------------');
          console.log('--------------options log--------------', options);
          console.log('--------------instance log--------------', instance);
          return null;
        },
        afterDestroy: (instance, options) => {
          console.log('--------------after destroy log--------------');
          console.log('--------------options log--------------', options);
          console.log('--------------instance log--------------', instance);
          return null;
        }
      }
    }
  }
);
