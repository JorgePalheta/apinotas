//o que é necessario para fazer esse codigo funcionar npm install express cors body-parser dotenv
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = 3000;
const routes = require('./routes');

const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({extended: false}));
server.use('/api', routes);

server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
;





