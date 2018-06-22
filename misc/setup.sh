#!/usr/bin/env bash

# Get necessary global Apps.
apt-get -y upgrade
apt-get install npm nodejs -y

mysql -u root < ./medici.sql
/usr/bin/npm install -g gulp
/usr/bin/npm install -g bower

# Minimize The Disk Image

echo "Minimizing disk image..."
dd if=/dev/zero of=/EMPTY bs=1M
rm -f /EMPTY
sync
