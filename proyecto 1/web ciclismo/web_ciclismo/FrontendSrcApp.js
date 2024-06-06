import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [corredores, setCorredores] = useState([]);
  const [newCorredor, setNewCorredor] = useState({
    curpRun: '',
    genero: '',
    fechaNacRun: '',
    NumCarreraP: '',
    IdCategoriaPert: '',
    CalleRun: '',
    NumIntRun: '',
    NumExtRun: '',
    ColRun: '',
    cpRun: '',
    ciudadRun: '',
    entidadRun: ''
  });

  useEffect(() => {
    axios.get('http://localhost:3001/corredores')
      .then(response => {
        setCorredores(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching corredores:', error);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCorredor({
      ...newCorredor,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/corredores', newCorredor)
      .then(response => {
        setCorredores([...corredores, response.data.data]);
        setNewCorredor({
          curpRun: '',
          genero: '',
          fechaNacRun: '',
          NumCarreraP: '',
          IdCategoriaPert: '',
          CalleRun: '',
          NumIntRun: '',
          NumExtRun: '',
          ColRun: '',
          cpRun: '',
          ciudadRun: '',
          entidadRun: ''
        });
      })
      .catch(error => {
        console.error('Error adding corredor:', error);
      });
  };

  return (
    <div>
      <h1>Corredores</h1>
      <ul>
        {corredores.map(corredor => (
          <li key={corredor.curpRun}>
            {corredor.curpRun} - {corredor.genero} - {corredor.fechaNacRun}
          </li>
        ))}
      </ul>
      <h2>Añadir Corredor</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="curpRun"
          value={newCorredor.curpRun}
          onChange={handleInputChange}
          placeholder="CURP"
          required
        />
        <input
          type="text"
          name="genero"
          value={newCorredor.genero}
          onChange={handleInputChange}
          placeholder="Género"
          required
        />
        <input
          type="date"
          name="fechaNacRun"
          value={newCorredor.fechaNacRun}
          onChange={handleInputChange}
          required
        />
        {/* Añadir otros campos según sea necesario */}
        <button type="submit">Añadir Corredor</button>
      </form>
    </div>
  );
}

export default App;
