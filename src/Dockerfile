FROM node:22 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

COPY . .

RUN npm run build

FROM nginx:stable-alpine AS prod
COPY --from=build ./app/dist /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
EXPOSE 4175
CMD ["nginx", "-g", "daemon off;"]
