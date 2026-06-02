const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Servidor de yan Gracia funcionando correctamente');
});

app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});
