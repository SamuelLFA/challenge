
FROM node:12

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

ADD . /usr/src/app

RUN npm run tsc

EXPOSE 3333

CMD [ "npm", "start" ]