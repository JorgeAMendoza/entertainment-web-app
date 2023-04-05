FROM node:18

WORKDIR /usr/src/app

COPY . .

RUN npm install &&\
    cd client &&\
    npm install

EXPOSE 8080

CMD [ "npm", "run", "start:client:prod" ]