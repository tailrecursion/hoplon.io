help:
	@echo "USAGE: make [help|deploy]"

deploy: boot
	boot prod
	ghp-import -p resources/public
