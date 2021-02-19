#MongoDB Installation
 
#Import the public key used by the package management system
wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -
 
#Create a list file for MongoDB.
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list
 
#Reload local package database.
sudo apt-get update
 
#Install the MongoDB packages
sudo apt-get install -y mongodb-org
 
#Installation is done, now lets start mongodb 
 
sudo systemctl start mongod
 
#Ensure that MongoDB will start following a system reboot
sudo systemctl enable mongod
 
 
#Node Setup
 
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
 
# .~/.nvm/nvm.sh 
 
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
 
#install node
nvm install node
 
#check the version
node --version
