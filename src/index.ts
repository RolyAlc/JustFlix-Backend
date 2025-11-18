import config from './config';
import { buildServer } from './app/http/server';

/**
 * Punto de entrada de la aplicación.
 * Inicializa el servidor y comienza a escuchar en el puerto configurado.
 */
const app = buildServer();
const port = config.port;

// Inicia la escucha del servidor con un callback.
app.listen(port, () => {
    // Permite sobreescribir el host del entorno.
    const hostPort = process.env.PORT_HOST ?? port;
    console.log(`Servidor escuchando en http://localhost:${hostPort}`);
});