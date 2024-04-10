# Load env variables into makefile
include .env

# Default target: build the project
all: run

# Run the project
run:
	pnpm run start
	
# Run the project and relay compiler
dev:
	pnpm run start &
	pnpm relay-compiler --watch &

# Run the relay compiler and have it watch for changes
relay:
	pnpm relay-compiler --watch

# Sync the frontend schema with the backend schema
update-schema:
	pnpm rover graph introspect $(DEV_ENDPOINT) > $(SCHEMA_PATH)

.PHONY: all run update-schema dev relay
