#!/bin/bash

sudo apt-get install libssl-dev -y

#Install Python 3.7
sudo add-apt-repository ppa:deadsnakes/ppa
sudo apt update
sudo apt install python3.7 -y

#Install PIP
sudo apt install python3-pip -y
python3.7 -m pip install pip


#Install Django
pip3 install Django==2.2.1 --user
pip3 install djangorestframework==3.9.3 --user
pip3 install django-rest-knox==4.0.1 --user

sudo apt-get install python3.7-dev -y
sudo apt-get install libmysqlclient-dev -y
pip3 install python-decouple --user
pip3 install django-rest-auth --user
pip3 install Pillow --user

#Install React
# sudo apt-get install nodejs npm -y
# sudo apt-get install nodejs=12.2.0 -y
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs


#Install Apache2
sudo apt-get install apache2 -y
sudo service apache2 restart


#Install packages
cd /vagrant/code && npm install

#Change timezone
sudo timedatectl set-timezone Europe/Sofia
