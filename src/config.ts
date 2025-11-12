import dotenv from 'dotenv';

dotenv.config();

const config = {
    port: parseInt(process.env.PORT || '3000', 10),
};

export default config;