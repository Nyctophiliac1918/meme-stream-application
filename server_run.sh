#!/bin/bash
 
 
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  
#cd backend
# Setup DB or any other environment variables you want to setup.
npm install
 
node app.js
