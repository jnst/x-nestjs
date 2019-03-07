FROM node:lts-alpine

COPY . /server
WORKDIR /server

RUN yarn install && yarn build
EXPOSE 3000

CMD ["yarn", "start"]
