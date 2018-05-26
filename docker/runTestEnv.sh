docker run -d -p 49160:22 -p 49161:80 -p 49162:3306 -v /mnt/data/CloudStation/Projects/FinFam/website/docker/:/mnt/ wnameless/mysql-phpmyadmin

ssh root@localhost -p 49160
open http://localhost:49161/phpmyadmin/

