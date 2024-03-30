FROM node:slim
WORKDIR /counterApp
COPY . .
RUN npm ci
CMD node server.js
EXPOSE 8080