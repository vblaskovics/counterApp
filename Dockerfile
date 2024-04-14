FROM node:slim
WORKDIR /counterApp
COPY . .
RUN npm ci
CMD node ./dist/src/server.js
EXPOSE 8080