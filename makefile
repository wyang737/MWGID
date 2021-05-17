prod:
	@sudo docker-compose up

build-prod:
	@sudo docker-compose build
	@sudo docker-compose up

build:
	@sudo docker-compose build
	
test:
	@node test.js
