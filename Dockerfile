FROM node:14-buster

WORKDIR /ddd

COPY package*.json ./
COPY yarn.lock ./
COPY *.json ./
COPY dist ./dist

RUN mkdir ddd && chown -R node:node .
USER node

ENV NODE_ENV=production

RUN yarn install --production=true

CMD ["node","dist/src/server.js"]