# base image
FROM nginx:1.23.1-perl

RUN rm -rf /usr/share/nginx/html/*
COPY dist /usr/share/nginx/html
RUN ls -lha /usr/share/nginx/html
COPY default-ui.conf /etc/nginx/conf.d/default.conf
RUN ls -lha /etc/nginx/conf.d
RUN cat /etc/nginx/conf.d/default.conf

# expose port 443 80
EXPOSE 80

# run nginx
CMD ["nginx", "-g", "daemon off;"]
