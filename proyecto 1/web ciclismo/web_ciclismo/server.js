const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Conexión a la base de datos MongoDB
mongoose.connect('mongodb://localhost:27017/Backend2', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
  console.log('Conectado a la base de datos MongoDB');
});

// Definir el esquema y el modelo de la colección Corredores
const corredorSchema = new mongoose.Schema({
  curpRun: { type: String, unique: true },
  genero: String,
  fechaNacRun: Date,
  NumCarreraP: Number,
  IdCategoriaPert: Number,
  CalleRun: String,
  NumIntRun: String,
  NumExtRun: String,
  ColRun: String,
  cpRun: String,
  ciudadRun: String,
  entidadRun: String
});
const Corredor = mongoose.model('Corredor', corredorSchema);

// Rutas para CRUD de Corredores
app.post('/corredores', async (req, res) => {
  try {
    const corredor = new Corredor(req.body);
    await corredor.save();
    res.status(201).json(corredor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.get('/corredores', async (req, res) => {
  try {
    const corredores = await Corredor.find();
    res.json(corredores);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Agrega más rutas para actualizar y eliminar corredores según sea necesario...

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
