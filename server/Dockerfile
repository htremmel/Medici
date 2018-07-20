FROM php:7.2.6-apache

RUN apt-get update -y \
    && apt-get install -y openssl zip unzip git \
    && curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer \
    && docker-php-ext-install pdo mbstring
    && composer install
