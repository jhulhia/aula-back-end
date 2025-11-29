import express from 'express';
import session from "express-session";
//const session = require('express-session');

const app = express();
app.use(session({
  secret: 'segredo',
  resave: false,
  saveUninitialized: true,
}));
let cont = 0;
app.get('/set-session', (req, res) => {
    cont++;
  req.session.usuario = 'Maria';
  res.send('Sessão criada!');
});

app.get('/get-session', (req, res) => {
  res.send(`Usuário da sessão: ${req.session.usuario} ${cont}`);
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));