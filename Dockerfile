FROM node:18

WORKDIR /usr/src/app

COPY ./server .

RUN npm install

EXPOSE 4000

CMD ["npm", "run", "server:test"]