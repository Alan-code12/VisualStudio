import express from 'express';

const app = express();

app.use(express.static('\\wsl.localhost\Ubuntu\home\alandelangel\repositorio\proyecto 1\web ciclismo\web_ciclismo'));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor web iniciado en http://localhost:${PORT}`);
});
