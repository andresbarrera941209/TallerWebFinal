import express from "express";
import cors from "cors";
import path from "path";
import { productos } from "./models/producto";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Servidor web en ejecución");
});

let isAuthenticated = false;

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "1234") {
    isAuthenticated = true;
    return res.json({ success: true, message: "Autenticación exitosa" });
  }

  return res.status(401).json({ success: false, message: "Credenciales incorrectas" });
});

app.get("/protegida", (req, res) => {
  if (isAuthenticated) {
    console.log("Arreglo de productos:");
    console.log(productos);
    
    return res.json({ 
      message: "Acceso permitido",
      productos: productos
    });
  }
  return res.status(401).json({ message: "Acceso denegado. Debes autenticarte primero." });
});

app.use(express.static(path.join(__dirname, "../public")));

app.get("/login-page", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/login.html"));
});

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
