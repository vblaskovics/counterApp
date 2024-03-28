FROM node:slim
FROM mcr.microsoft.com/playwright:v1.42.1-jammy
WORKDIR /counterApp
COPY package*.json ./
RUN npm ci
RUN npx playwright install --with-deps
COPY . .
CMD npx playwright test counterApp/tests/clickTest.spec.js ; node server.js
EXPOSE 8080