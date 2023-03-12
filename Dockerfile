FROM node:16

RUN mkdir -p /usr/app/
WORKDIR /usr/app

COPY . .

RUN npm install
RUN npm run build

ENTRYPOINT [ "npm", "run", "start" ]