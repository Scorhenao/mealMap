# Usa una imagen oficial de Node.js como base
FROM node:18-alpine

# Establece el directorio de trabajo en el contenedor
WORKDIR /usr/src/orders

# Copia el package.json e instala las dependencias
COPY package*.json ./
RUN npm install

# Copia el resto del código fuente
COPY . .

# Compila el código de Nest.js
RUN npm run build

# Exponemos el puerto donde correrá el servicio
EXPOSE 3001

# Comando para iniciar el servicio en modo producción
CMD ["npm", "run", "start:prod"]