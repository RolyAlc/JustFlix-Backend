import config from './config';
import { buildServer } from './app/http/server';

const app = buildServer();
const port = config.port;

app.get('/', (req, res) => {
    res.send("Servidor activo.");
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});