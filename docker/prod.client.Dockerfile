FROM node:18

WORKDIR /usr/src/app

COPY . .

RUN npm install &&\
    cd client &&\
    npm install

CMD [ "npm", "run", "start:client:prod" ]