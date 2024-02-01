# Happy-Web

## Setup

1. Download all the Node.js dependencies with `Yarn` or any other package manager:

`$ yarn install` or `$ npm install`

2. If you want to run this application in development mode, use the `start` script:

`$ yarn start` or `$ npm run start`

## Ambient Variables

This application uses `Mapbox` as its default map API. Be sure to check the [Mapbox documentation](https://www.mapbox.com/) to learn more, and make sure to set up the `.env` file.

Since the `.env` file is not included on this repository, create a `.env` file on the root folder of this project and add your Mapbox API token.

The backend base URL is also defined as an ambient variable, so you should add it as an environment variable as well.

Your `.env` file should look like this:

```
REACT_APP_MAPBOX_TOKEN=[YOUR MAPBOX TOKEN]
REACT_APP_API_BASE_URL=[YOUR BACKEND BASE URL]
```

Example:

```
REACT_APP_MAPBOX_TOKEN=nSxaZCTRVGvNbDffBUbRwAsrU2wXVsde
REACT_APP_API_BASE_URL=http://192.168.0.10:3333
```
