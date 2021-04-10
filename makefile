prod:
	@echo "Hello World!"

dev_env:
	@echo "Preparing development environment..."
	
test:
	@npx mocha ./app/create_db.js
