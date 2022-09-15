FROM node:latest

WORKDIR /usr/src/app
COPY package.json .
RUN ["npm", "install", "--production"]
COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
CMD ["node", "index.js" ]
