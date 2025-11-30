import config from './config';
import { buildServer } from './app/http/server';

/**
 * Punto de entrada de la aplicación.
 * Inicializa el servidor y comienza a escuchar en el puerto configurado.
 */
const app = buildServer();
const port_env = process.env.PORT_HOST
const port = port_env ?? config.port;

// Inicia la escucha del servidor con un callback.
app.listen(port, () => {
    // Permite sobreescribir el host del entorno.
    console.log(`Servidor escuchando en http://localhost:${port}`);
});