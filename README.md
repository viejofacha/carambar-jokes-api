# Carambar & Co — Jokes API (v1)
API versionnée (Node + Express + Sequelize + SQLite).
Endpoints: ajouter, lister, consulter par id, aléatoire. Swagger inclus.

## Local
npm install
npm run seed
npm start
# http://localhost:3000/docs

## Endpoints
- POST /api/v1/jokes
- GET  /api/v1/jokes
- GET  /api/v1/jokes/:id
- GET  /api/v1/jokes/random
