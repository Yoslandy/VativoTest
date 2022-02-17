FROM node:14-alpine AS development
ENV NODE_ENV development

WORKDIR /app
COPY . .
RUN yarn install


EXPOSE 3000

CMD [ "yarn", "start" ]