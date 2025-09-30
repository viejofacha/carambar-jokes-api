import swaggerJSDoc from "swagger-jsdoc";
export const swaggerSpec = swaggerJSDoc({
  definition:{ openapi:"3.0.0", info:{ title:"Carambar & Co — Jokes API (v1)", version:"1.0.0",
  description:"API versionnée: ajouter, lister, consulter par id et aléatoire." }, servers:[{url:"/"}]},
  apis:["./src/jokes/*.js"]
});
