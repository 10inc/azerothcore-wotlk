FROM node:16.19-alpine

WORKDIR /bot

COPY package*.json ./
RUN npm install -y

COPY . .
CMD npm start
