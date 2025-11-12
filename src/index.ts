import config from './config';
import { buildServer } from './app/http/server';

const app = buildServer();
const port = config.port;

app.listen(port, () => {
    const hostPort = process.env.PORT_HOST || port;
    console.log(`Servidor escuchando en http://localhost:${hostPort}`);
});