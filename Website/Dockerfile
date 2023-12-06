FROM node:18.19.0

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

EXPOSE 3000

ENV NAME smartreserve

ENTRYPOINT [ "npm" ]
CMD ["start"]

COPY . .