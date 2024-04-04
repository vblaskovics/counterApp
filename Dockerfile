FROM node:slim
WORKDIR /counterApp
COPY . .
RUN npm ci
CMD node ./src/server.js
EXPOSE 8080