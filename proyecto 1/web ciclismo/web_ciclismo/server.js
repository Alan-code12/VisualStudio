const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Conexión a la base de datos SQLite
const db = new sqlite3.Database('Backend2.db', (err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err.message);
    } else {
        console.log('Conectado a la base de datos SQLite.');
    }
});

// Ruta para obtener todos los corredores
app.get('/corredores', (req, res) => {
    const sql = 'SELECT * FROM Corredores';
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
});

// Ruta para añadir un nuevo corredor
app.post('/corredores', (req, res) => {
    const { curpRun, genero, fechaNacRun, NumCarreraP, IdCategoriaPert, CalleRun, NumIntRun, NumExtRun, ColRun, cpRun, ciudadRun, entidadRun } = req.body;
    const sql = 'INSERT INTO Corredores (curpRun, genero, fechaNacRun, NumCarreraP, IdCategoriaPert, CalleRun, NumIntRun, NumExtRun, ColRun, cpRun, ciudadRun, entidadRun) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const params = [curpRun, genero, fechaNacRun, NumCarreraP, IdCategoriaPert, CalleRun, NumIntRun, NumExtRun, ColRun, cpRun, ciudadRun, entidadRun];
    db.run(sql, params, function (err) {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: req.body,
            id: this.lastID
        });
    });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
