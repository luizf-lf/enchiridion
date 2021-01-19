# Happy Server

## Setup

1. Download all the Node.js dependencies with `Yarn` or any other package manager:

`$ yarn install` or `$ npm install`

2. By default, this server uses SQLite3 as it's database, so make sure to run the database migrations with Typeorm:

`$ yarn typeorm migration:run` or `$ npm run typeorm migration:run`

3. Then, start the server with the `start` script:

`$ yarn start` or `$ npm run start`

This will run this server locally on port `3333`.

## Main endpoints:

- `GET` `/orphanages` - List all orphanages.
- `GET` `/orphanages/:id` - List a specific orphanage, where `:id` is the orphanage database id.
- `POST` `/orphanages` - Create an orphanage.
