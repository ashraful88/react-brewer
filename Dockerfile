FROM node:10.13.0

WORKDIR /usr/src/app
COPY . .

ARG BUILD_ENV=production

ENV NODE_ENV=production

#RUN npm set registry https://registry.npmjs.org/
RUN npm install

WORKDIR /usr/src/app/express
RUN npm install

CMD [ "npm", "run", "start" ]
