FROM node:lts-alpine3.9

# 在容器中创建一个目录
RUN mkdir -p /usr/src/nodeHttps/

WORKDIR /usr/src/nodeHttps/

COPY . /usr/src/nodeHttps/

RUN npm install

CMD npm run start
