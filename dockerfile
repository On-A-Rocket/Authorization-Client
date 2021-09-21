FROM node:12.2.0-alpine

RUN mkdir /app
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY . .

RUN npm install
RUN npm install -g react-scripts
RUN npm install -g react-router-dom
RUN npm install -g sass

EXPOSE 3000

CMD ["npm", "start"]