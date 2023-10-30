const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");

// Dependencias de rutas
const bootcampsRoutes = require("./routes/bootcampsRoutes");
const coursesRoutes = require("./routes/coursesRoutes");
const reviewRoutes = require("./routes/reviewsRoutes");
const usersRoutes = require("./routes/usersRoutes");

//construir el objeto app
const app = express();

// vincular las rutas del Proyecto
app.use("/bootcamps", bootcampsRoutes);
app.use("/courses", coursesRoutes);
app.use("/reviews", reviewRoutes);
app.use("/users", usersRoutes);

//configurar variables de entorno
dotenv.config({
  path: "./config/.env",
});

//prueba de url
app.get("/prueba", function (req, res) {
  res.send("Hola mmg");
});

//prueba de url
app.get("/prueba/:id", function (req, res) {
  res.send(`Butifarra hpt: ${req.params.id}`);
});

//tomar variable puerto del entorno
const puerto = process.env.PUERTO;

//servidor de desarrollo
app.listen(puerto, function () {
  console.log(`Pere socio...${puerto}`.bgMagenta.yellow.inverse);
});

//URI DEL PROYECTO

// URI DE CURSOS
app.get("/courses", function (req, res) {
  res.json({
    success: true,
    msg: "aqui se traeran todos los cursos",
  });
});
