# Medici
A learning project for Docker, SPA, AngularJS, and gulp.

## Docker Compose

Docker compose is a tool that's used for defining and running multi-container Docker applications. With a Compose file, it makes it very convenient to quickly run your services in a development environment.

For more documentation, refer to: https://docs.docker.com/compose/overview

The docker-compose.yml file creates three separate services, so that it's easier to work on the separate components of this project: PHP (server-side), AngularJS, and MariaDB.

In order to run all the current applications, simply run:

1. ```docker-compose up```
2. Navigate to the ${PROJECT_ROOT}/server/src directory and run: ```php artisan serve```
3. Navigate to the ${PROJECT_ROOT}/client/src directory and run: ```http-server -o``` or however you want to serve it temporarily.

If you'd like to run all the containers in the background, simply pass the "-d" flag to the docker-compose command, and then containers can be stopped by running `docker-compose down`

## Docker Images

If you want to attach to a running docker container, a convenient command to open a bash shell session is:

```
docker exec -it <Container ID prefix> /bin/bash
```

The container ID can be fetched by running a 'docker ps'; Docker uses pattern matching, so you don't have to type the entire container ID! :)

