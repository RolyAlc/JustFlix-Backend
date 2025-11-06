# 🎬 Proyecto JustFlix - Backend

JustFlix es una plataforma de streaming de videos.

---

## 👥 Integrantes

- **Adrian**
- **Santiago**
- **Roly**

## Tecnología implementanda

### Backend

- **Node.js**
- **Express**
- **JavaScript**
- **TypeScript**

## Repositorio relacionados

| Módulo   | Repositorio                                                    |
| -------- | -------------------------------------------------------------- |
| Base     | [url](https://github.com/adriian04/just-eat-adrian-roly-santi) |
| Frontend | [url](https://github.com/SantiagoFalquet/justflix_frontend)    |

---

## Objetivo del proyecto

- Implementar una arquitectura cliente-servidor.
- Aplicar principios de **CLEAN code**.
- Desarrolar una interfaz atractiva y modular.
- Integrar API REST.

## Requisitos

- **Node.js >= 18**
- **Git**

## ✅ Progreso del proyecto

- [x] **Configuración Base**:
  - [x] Node.js + TypeScript
  - [x] Express
  - [x] nodemon
  - [x] dotenv
- [x] **Capa de Dominio**: Definición de entidades, casos de uso e interfaces de repositorio.
- [x] **Capa de Infraestructura**: Implementación del repositorio en memoria (`VideoRepositoryInMemory`).
- [x] **Capa de Presentación**: Implementación de rutas y controladores (`http`).

## TO-DO

- [ ] Utilizar datos estáticos (.json)
- [ ] Añadir un menu básico de endpoint a consultar

---

## Instalación y ejecución

### Archivo .env.example

Este archivo contiene las variables de entorno necesarias para que la aplicación funciene.
Para usarlo, copia este archivo a '.env' y rellena los valores.
El archivo 'env' NO debe ser subido al controlador de versiones (Git).

```bash
# Copiar
cp .env.example .env
```

```bash
# Ejemplo del fichero .env
PORT=3000
```

### Instalación paso a paso

```bash
# clonar el repositorio
git clone https://github.com/RolyAlc/JustFlix-Backend.git
cd JustFlix-Backend

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo (TypeScript + Nodemon)
npm start
```

---

Todos los derechos reservados © JustFlix 2025
