import { sequelize } from "../db/database.js";
import Sequelize from "sequelize";

import { Workpackage } from "./Workpackage.js";

export const Project = sequelize.define("projects",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    date: {
      primaryKey: true,
      type: Sequelize.DATE
    }
  },
  {
    paranoid: true
  }
  // {
  //   hooks: {
  //     beforeCreate: (instance, options) => {
  //       console.log('--------------before Create log--------------');
  //       console.log('--------------options log--------------',options);
  //       console.log('--------------instance log--------------',instance);
  //       return null;
  //     },
  //     afterCreate: (instance, options) => {
  //       console.log('--------------after Create log--------------');
  //       console.log('--------------options log--------------',options);
  //       console.log('--------------instance log--------------',instance);
  //       return null;
  //     },
  //     beforeDestroy: async (instance, options) => {
  //       console.log('--------------before destroy log--------------');
  //       console.log('--------------options log--------------',options);
  //       console.log('--------------instance log--------------', instance);
  //       const workpackages = await Workpackage.findAll({
  //         attributes: [
  //           "id",
  //           "title",
  //           "description",
  //           "completed",
  //           "checked",
  //           "projectId",
  //         ],
  //         order: [["id", "DESC"]],
  //       });
  //       console.log('--------------workpackages log--------------', workpackages);
  //       return null;
  //     },
  //     afterDestroy: (instance, options) => {
  //       console.log('--------------after destroy log--------------');
  //       console.log('--------------options log--------------',options);
  //       console.log('--------------instance log--------------',instance);
  //       return null;
  //     }
  //   }
  // }
);

Project.hasMany(Workpackage, {
  foreignKey: "projectId",
  sourceKey: "id",
});

Workpackage.belongsTo(Project, {
  foreignKey: "projectId",
  targetId: "id",
});
