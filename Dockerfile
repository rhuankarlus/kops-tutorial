FROM node:14-alpine

WORKDIR /home/node/app
COPY ./package.json ./package.json
COPY ./yarn.lock ./yarn.lock

RUN yarn

CMD [ "yarn", "start" ]
