#Makefile for SWE Project 

prod:
  echo "Hello World!"

dev_env:
  echo "Preparing development environment.."
  
tests: # sets up the db and runs a simple test query
  npx mocha create_db.js # need to be in the same directory as create_db.js
