import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Credenciales de prueba
const USERNAME = "admin";
const PASSWORD = "1234";

// Ruta para login de prueba
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === USERNAME && password === PASSWORD) {
    return res.json({ success: true, message: "Acceso permitido" });
  }

  return res.status(401).json({ success: false, message: "Credenciales incorrectas" });
});

app.listen(3000, () => {
  console.log("Servidor web en ejecución en http://localhost:3000");
});
