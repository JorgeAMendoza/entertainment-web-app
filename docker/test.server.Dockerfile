FROM node:18

WORKDIR /usr/src/app

COPY . .

RUN npm install &&\
    cd server &&\
    npm install

EXPOSE 4000

CMD [ "npm", "run", "start:backend:test" ]