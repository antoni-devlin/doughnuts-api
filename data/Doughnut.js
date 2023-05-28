import { Sequelize, DataTypes } from "sequelize";

export const Doughnut = Sequelize.define(
  "Doughnut",
  {
    // Here we define our model attributes
    // Each attribute will pair to a column in our database

    // Our primaryKey, book id, our unique identifier
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },

    // A column for the title of our book
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    // A column for the author name
    manufacturer: {
      type: DataTypes.STRING,
      // remember allowNull defaults to true
    },
  },
  {
    // For the sake of clarity we specify our indexes
    indexes: [{ unique: true, fields: ["id"] }],
  }
);

// `sequelize.define` also returns the model
console.log(Doughnut === Sequelize.models.Doughnut); // true
