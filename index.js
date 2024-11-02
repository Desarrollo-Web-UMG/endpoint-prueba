// server.js
const express = require('express');
const app = express();
const PORT = 3000;

// Endpoint 1: Hola mundo
app.get('/hola', (req, res) => {
    res.json({ message: "Hola, mundo" });
});

// Endpoint 2: Otro mensaje
app.get('/mensaje', (req, res) => {
    res.json({ message: "Este es otro mensaje aleatorio" });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
