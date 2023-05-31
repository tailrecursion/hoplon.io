help:
	@echo "USAGE: make [help|deploy]"

deploy: 
	ghp-import -p public/
