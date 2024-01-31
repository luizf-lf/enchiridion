# Nodejs MySQL Express Example

A NodeJS MySQL Express example, as the name implies, it's a node.js restful API server that uses Express and MySQL.

It is a simple CRUD example that also has a Swagger documentation.

## Running the project

1. Install the dependencies:

   ```bash
    yarn
   ```

2. Configure the environment variable with the database url. Create a `.env` file and add the mysql connection url. Example:

   ```env
    DATABASE_URL="mysql://user:pass@localhost:3306/database_name"
   ```

3. Migrate the database

   ```bash
    yarn prisma migrate dev
   ```

4. Run the project in development mode

   ```bash
    yarn start
   ```

5. Check the API Docs

   Go to <http://localhost:3000/api-docs> to see the REST API documentation.
