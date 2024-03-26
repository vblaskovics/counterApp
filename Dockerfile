FROM node:slim
FROM mcr.microsoft.com/playwright:v1.42.1-jammy
WORKDIR /counterApp
COPY . ./
RUN npm ci
CMD [ "npx", "playwright", "test", "node", "server.js" ]
EXPOSE 8080

# FROM node:slim
# FROM mcr.microsoft.com/playwright:v1.42.1-jammy
# WORKDIR /counterApp
# COPY package*.json /
# RUN npm ci
# RUN npx playwright install --with-deps
# COPY . /counterApp/
# CMD [ "npx", "playwright", "test", "node", "server.js" ]
# EXPOSE 8080