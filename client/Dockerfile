FROM node:8.11.3-alpine

ADD . /app
WORKDIR /app

RUN npm rebuild node-sass && npm install -g bower gulp && npm install
