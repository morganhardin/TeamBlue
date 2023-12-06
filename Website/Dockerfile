FROM node:12.22.9

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

EXPOSE 3000

ENV NAME smartreserve

CMD ["npm", "start"]

COPY . .