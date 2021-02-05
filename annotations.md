## Annotations

### Docker

List of commands:

- run docker image: **docker-compose up -d**
- show docker containers: **docker-compose ps**
- enter container bash: **docker exec -it container_app_name bash**

### Go Language

List of commands:

- init the main go package: **go mod init PACKAGE NAME (Eg.: github.com/luizf-lf/codepix)**
- run all tests: **go test ./...**
- compile proto files: **protoc --go_out=application/grpc/pb --go_opt=paths=source_relative --go-grpc_out=application/grpc/pb --go-grpc_opt=paths=source_relative --proto_path=application/grpc/protofiles application/grpc/protofiles/\*.proto**
