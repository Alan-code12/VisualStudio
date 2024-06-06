const express = require('express');
const router = express.Router();
const db = require('../database');

// Get all corredores
router.get('/', (req, res) => {
    db.all('SELECT * FROM Corredores', [], (err, rows) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json({
            "message": "success",
            "data": rows
        });
    });
});

// Add a new corredor
router.post('/', (req, res) => {
    const { curpRun, genero, fechaNacRun, NumCarreraP, IdCategoriaPert, CalleRun, NumIntRun, NumExtRun, ColRun, cpRun, ciudadRun, entidadRun } = req.body;
    const sql = `INSERT INTO Corredores (curpRun, genero, fechaNacRun, NumCarreraP, IdCategoriaPert, CalleRun, NumIntRun, NumExtRun, ColRun, cpRun, ciudadRun, entidadRun)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const params = [curpRun, genero, fechaNacRun, NumCarreraP, IdCategoriaPert, CalleRun, NumIntRun, NumExtRun, ColRun, cpRun, ciudadRun, entidadRun];
    db.run(sql, params, function(err) {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json({
            "message": "success",
            "data": req.body,
            "id": this.lastID
        });
    });
});

module.exports = router;
