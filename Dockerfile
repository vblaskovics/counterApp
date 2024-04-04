FROM node:slim
WORKDIR /counterApp
COPY . .
RUN npm ci
CMD node ./dist/server.js
EXPOSE 8080