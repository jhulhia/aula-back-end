import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();
app.use(cookieParser());

app.get('/set-cookie', (req, res) => {
  res.cookie('usuario', 'Maria', { maxAge: 60000 });
  res.send('Cookie definido!');
});

app.get('/get-cookie', (req, res) => {
  res.send(`Usuário: ${req.cookies.usuario}`);
});

app.get('/set-color', (req, res) => {
  res.cookie('user', 'orange', { maxAge: 60000 });
  res.send('cor definida!');
});

app.get('/get-color', (req, res) => {
  const color = req.cookies.user || 'blue';

  res.send(`
    <html>
      <body style="background-color: ${color};">
        <h1>Cor carregada: ${color}</h1>
      </body>
    </html>
  `);
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
