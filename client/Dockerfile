FROM node:lts

WORKDIR /app
COPY . .
RUN chown -R node:node /app
USER node
RUN npm ci

EXPOSE 3000
CMD npm start