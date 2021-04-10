#Makefile for SWE Project 

prod:
	@echo "Hello World!"

test:
	@npx mocha ./app/create_db.js
