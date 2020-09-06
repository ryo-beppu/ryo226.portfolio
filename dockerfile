FROM node:alpine

WORKDIR /ryo226.portfolio

COPY ["package.json", "yarn.lock", "./"]

RUN yarn

COPY . .

ENTRYPOINT ["yarn", "start"]