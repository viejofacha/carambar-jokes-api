import { Joke } from "../db/models/Joke.js";
export const createJoke = (data)=>Joke.create(data);
export const getAllJokes = ()=>Joke.findAll({order:[["id","ASC"]]});
export const getJokeById = (id)=>Joke.findByPk(id);
export async function getRandomJoke(){
  const [j] = await Joke.sequelize.query(
    "SELECT * FROM jokes ORDER BY RANDOM() LIMIT 1;", { model:Joke, mapToModel:true }
  );
  return j || null;
}
