import { app, initDb } from "./app.js";
const PORT = process.env.PORT || 3000;
initDb().then(()=>app.listen(PORT,()=>console.log(`API http://localhost:${PORT}\nSwagger http://localhost:${PORT}/docs`)));
