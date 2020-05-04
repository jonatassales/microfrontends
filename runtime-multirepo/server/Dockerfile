FROM node:14

WORKDIR /usr/src/app

COPY package.json .
COPY . .

RUN yarn
RUN yarn build

EXPOSE 5000

CMD [ "node", "build/index.js" ]