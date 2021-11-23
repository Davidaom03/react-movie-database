FROM node:14.17.5

WORKDIR /docker_1

ENV PORT 80

COPY package.json /docker_1/

RUN npm install

COPY . /docker_1

RUN npm run build
