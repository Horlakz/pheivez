FROM node:18-alpine

WORKDIR /app

COPY package.json .

RUN yarn

COPY . .

EXPOSE 4173

RUN yarn build

CMD ["yarn", "start"]