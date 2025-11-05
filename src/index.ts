import config from './config';
import express from 'express';

const app = express();
const port = config.port;

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Servidor activo.");
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});