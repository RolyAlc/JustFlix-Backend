# ==== 1. Construcción (build) ====
# Version Node 24 - Versión ligera para b/p
FROM node:24-slim AS build

# Establecer directorio de trabajo dentro del contenedor.
WORKDIR /usr/src/app

# Copiar los archivos de definición de dependencia.
COPY package*.json ./

# Instalar las dependencias de producción y desarrollo.
RUN npm install

# Copiar todo el código fuente del proyecto.
COPY . .

# Compilar todo el código fuente del proyecto.
RUN npm run build

# ==== 2. Producción (production) ====
# Version Node 24 - Versión ligera para b/p
FROM node:24-slim AS production

WORKDIR /usr/src/app

# Copiar solo las dependencias de producción desde la fase de contrucción.
COPY --from=build /usr/src/app/node_modules ./node_modules
# Copiar el código JS compilado desde la fase de construcción.
COPY --from=build /usr/src/app/dist ./dist
# Copiar package.json para q el comando de start funcione.
COPY package.json .

# Exponer el puerto que usará la aplicación (doc).
EXPOSE 3000

# Comando por defecto para iniciar la aplicación
CMD ["npm", "run", "start"]

