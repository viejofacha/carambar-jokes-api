import * as s from "./jokes.service.js";
export async function addJoke(req,res,next){
  try{ const {question,answer}=req.body;
    if(!question||!answer) return res.status(400).json({error:"question and answer are required"});
    res.status(201).json(await s.createJoke({question,answer}));
  }catch(e){next(e);}
}
export async function listJokes(_req,res,next){ try{res.json(await s.getAllJokes());}catch(e){next(e);} }
export async function getJoke(req,res,next){ try{
  const j=await s.getJokeById(req.params.id); if(!j) return res.status(404).json({error:"Not found"}); res.json(j);
}catch(e){next(e);} }
export async function randomJoke(_req,res,next){ try{
  const j=await s.getRandomJoke(); if(!j) return res.status(404).json({error:"No jokes yet"}); res.json(j);
}catch(e){next(e);} }
