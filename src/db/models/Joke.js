import { DataTypes, Model } from "sequelize";
import { sequelize } from "../index.js";
export class Joke extends Model {}
Joke.init(
  { id:{type:DataTypes.INTEGER,autoIncrement:true,primaryKey:true},
    question:{type:DataTypes.STRING,allowNull:false},
    answer:{type:DataTypes.STRING,allowNull:false} },
  { sequelize, modelName:"Joke", tableName:"jokes", timestamps:true }
);
