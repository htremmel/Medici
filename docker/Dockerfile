FROM wnameless/mysql-phpmyadmin

MAINTAINER Hans T.

WORKDIR /opt

ADD setup.sh /tmp/setup.sh
RUN bash /tmp/setup.sh

RUN apt-get update
RUN apt-get install -y build-essential
RUN apt-get install -y nodejs
RUN /usr/bin/npm install -g gulp
RUN /usr/bin/npm install -g bower

VOLUME [/opt]
CMD ["gulp", "watch"]
