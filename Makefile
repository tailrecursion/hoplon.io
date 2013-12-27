help:
	@echo "USAGE: make [help|boot|deploy]"

boot:
	boot rebuild-boot
	chmod 0755 ./boot

deploy: boot
	./boot production
	#ghp-import -p resources/public
