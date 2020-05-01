FROM nginx:1.13.9-alpine

COPY nginx.conf /etc/nginx/nginx.conf

RUN mkdir -p /var/bundles

COPY bundles/ /var/bundles/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
