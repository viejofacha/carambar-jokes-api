# Carambar & Co — Jokes API (v1)

API versionnée construite avec **Node.js + Express + Sequelize + SQLite**.  
Documentation **Swagger** incluse et **jeu de données** (seed) initial avec 10 blagues.

---

## 🔗 Liens (production)

- **Base URL :** https://carambar-jokes-api-yjvd.onrender.com
- **Swagger :** https://carambar-jokes-api-yjvd.onrender.com/docs

> ℹ️ Plan gratuit Render : la **première requête** après inactivité peut être plus lente (*cold start*).

---

## 🧰 Stack & Architecture

- **Stack :** Node 18+, Express, Sequelize (SQLite), Swagger UI (OpenAPI 3)
- **Approche :** MVC léger  
  `db/models` · `jokes.service` · `jokes.controller` · `jokes.routes` · `swagger` · `app/server`

---

## 🗂️ Arborescence

src/
├─ db/
│ ├─ index.js
│ └─ models/Joke.js
├─ jokes/
│ ├─ jokes.service.js
│ ├─ jokes.controller.js
│ └─ jokes.routes.js
├─ swagger/swagger.js
├─ seed/seed.js
├─ app.js
└─ server.js

yaml
Copiar código

---

## ▶️ Démarrer en local

```bash
npm install
npm run seed          # (ré)initialise la base SQLite avec 10 blagues
npm start             # API sur http://localhost:3000 et Swagger sur /docs
# Swagger local : http://localhost:3000/docs
Variables d’environnement (optionnelles) :

ini
Copiar código
DB_PATH=./data.sqlite
PORT=3000
CORS est activé globalement (app.use(cors())).

📚 Endpoints (v1)
Préfixe commun : /api/v1

POST /jokes — Ajouter une blague

GET /jokes — Lister toutes les blagues

GET /jokes/:id — Consulter une blague par id

GET /jokes/random — Obtenir une blague aléatoire

Schéma Joke :

json
Copiar código
{
  "id": 1,
  "question": "Que dit un oignon quand il se cogne ?",
  "answer": "Aïe",
  "createdAt": "ISO-8601",
  "updatedAt": "ISO-8601"
}
🧪 Exemples rapides (cURL / Postman)
Créer une blague :

bash
Copiar código
curl -X POST https://carambar-jokes-api-yjvd.onrender.com/api/v1/jokes \
  -H "Content-Type: application/json" \
  -d '{"question":"Pourquoi les devs aiment le café ?","answer":"Parce qu’ils déboguent mieux !"}'
Aléatoire :

bash
Copiar código
curl https://carambar-jokes-api-yjvd.onrender.com/api/v1/jokes/random
Toutes les blagues :

bash
Copiar código
curl https://carambar-jokes-api-yjvd.onrender.com/api/v1/jokes
Par id :

bash
Copiar código
curl https://carambar-jokes-api-yjvd.onrender.com/api/v1/jokes/1
🧱 Versionnement
L’API est exposée sous le préfixe /api/v1.
Toute évolution majeure sera publiée sous /api/v2 en conservant la v1 stable.

🚀 Déploiement (Render)
Build Command : npm install && npm run seed

Start Command : npm start

Env (optionnel) : DB_PATH=./data.sqlite

SQLite sur Render (free) = stockage éphémère ; suffisant pour cette évaluation.
