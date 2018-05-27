FROM fauria/lamp
USER root

MAINTAINER Hans T.

ARG sshpass=root

WORKDIR /root


#Install basic environment
RUN apt-get -y update && \
        apt-get -y install \
        subversion \ 
        openssh-server \
            supervisor \
            vim

#Set up SSH access
RUN mkdir /var/run/sshd
RUN sed -i.bak s/PermitRootLogin\ prohibit-password/PermitRootLogin\ yes/g  /etc/ssh/sshd_config
RUN echo "root:$sshpass" | chpasswd
pMyAdmin
RUN mysqld & \
    service apache2 start; \
    sleep 5; \
    printf y\\n\\n\\n1\\n | apt-get install -y phpmyadmin; \
    sleep 15; \
    mysqladmin -u root shutdown

RUN sed -i "s#// \$cfg\['Servers'\]\[\$i\]\['AllowNoPassword'\] = TRUE;#\$cfg\['Servers'\]\[\$i\]\['AllowNoPassword'\] = TRUE;#g" /etc/phpmyadmin/config.inc.php 


COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

EXPOSE 22 80 3306 

VOLUME [/opt]

CMD mysqld_safe & \
    service apache2 start; \
    /usr/sbin/sshd -D

VOLUME ["/var/lib/mysql", "/var/log/mysql", "/var/log/apache2"]
