FROM node:lts-stretch-slim
WORKDIR /opt/sirubot
COPY . .
RUN apt-get update -y && \
    apt-get install --no-install-recommends -y
RUN yarn install && yarn build
CMD [ "node", "./build" ]