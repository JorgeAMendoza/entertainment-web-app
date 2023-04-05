FROM node:18

WORKDIR /usr/src/app

COPY . .

RUN npm install &&\
    cd server &&\
    npm install

CMD [ "npm", "run", "start:backend:prod" ]