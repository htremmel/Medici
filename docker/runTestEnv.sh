docker run -d -p 8080:80 -p 2222:22 -v /mnt/data/CloudStation/Projects/FinFam/website/:/var/www/html sunglasses/lamp-ssh

ssh root@localhost -p 2222
open http://localhost:8080/phpmyadmin/

