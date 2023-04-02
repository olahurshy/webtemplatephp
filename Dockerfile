FROM php:7.1.23-apache
WORKDIR /
COPY . /var/www/html
RUN echo "ServerName localhost:$PORT" >> /etc/apache2/apache2.conf
RUN docker-php-ext-install pdo_mysql
# CMD ["/usr/sbin/apache2ctl", "-D", "FOREGROUND"]
CMD sed -i "s/80/$PORT/g" /etc/apache2/sites-enabled/000-default.conf /etc/apache2/ports.conf && docker-php-entrypoint apache2-foreground