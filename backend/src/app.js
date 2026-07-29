import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());

app.get('/api/mensagem', (req, res) => {
  res.json({ texto: 'Olá do seu servidor Node.js!' });
});

app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`);
});