# Load env variables into makefile
include .env

# Default target: build the project
all: run

# Run the project
run:
	pnpm run start

# Sync the frontend schema with the backend schema
update-schema:
	pnpm rover graph introspect $(DEV_ENDPOINT) > $(SCHEMA_PATH)

.PHONY: all run update-schema validate-schema
