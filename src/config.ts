import dotenv from 'dotenv';

dotenv.config();

/**
 * Configuración principal de la aplicación.
 * Carga valores desde variables de entorno y aplica valores por defecto, en coso contrario.
 */
const config = {
    port: Number(process.env.PORT) || 3000,
};

// Valida los valores del puerto para que la aplicación no arranque con datos inválidos. Debido al [Number].
if (isNaN(config.port)) {
    throw new Error("La variable de entorno PORT debe de ser un número válido.")
}

export default config;