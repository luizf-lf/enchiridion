# Challenge 02 - Full-Stack && Full-Cycle immersion

For this challenge, it was created a new Docker image to run in a separated environment.
The purpose is to simulate a Apache Kafka topic message production and consumption with the Go Language.

## Setup

- Make sure to create a `.env` file, following the `.env.example`.
- Then start the Docker container with `docker-compose up -d`.
- Enter the go app cli with ``docker exec -it challenge02_app_1 bash`
- Finally, to see the magic happening, inside the app cli run the following command: `go run main.go`
