import express from "express";
import cors from "cors";
import path from "path";

const app = express();
app.use(cors());
app.use(express.json());

const USERNAME = "admin";
const PASSWORD = "1234";

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === USERNAME && password === PASSWORD) {
    return res.json({ success: true, message: "Acceso permitido" });
  }

  return res.status(401).json({ success: false, message: "Credenciales incorrectas" });
});

app.get("/", (req, res) => {
  res.send("Servidor web en ejecución");
});

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});

app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (_, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});
