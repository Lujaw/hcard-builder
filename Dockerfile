FROM mhart/alpine-node:12

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --no-optional

COPY . ./

EXPOSE 3000