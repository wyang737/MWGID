prod:
	@sudo docker-compose up

build-prod:
	@sudo docker-compose build
	@sudo docker-compose up

build:
	@sudo docker-compose build
	
test:
	@node test.js

push:
	@sudo docker-compose stop
	@sudo docker-compose build
	@sudo docker-compose up -d
	@echo "Sleeping for 35 Seconds"
	@sleep 35
	@sudo node test.js 
	@echo "TESTS PASSED!"
	@git commit -a
	@git push
