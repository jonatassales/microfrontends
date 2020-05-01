FROM node:10.15.3-alpine as builder

WORKDIR /app

COPY package.json .
COPY yarn.lock .
RUN yarn
COPY index.html .

FROM nginx:1.13.9-alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
