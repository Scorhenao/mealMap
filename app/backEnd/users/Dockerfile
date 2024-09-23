FROM node:18-alpine

WORKDIR /usr/src/users

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3003

CMD ["npm", "run", "start:prod"]