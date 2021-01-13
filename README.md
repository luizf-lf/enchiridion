# Proffy-Web

## Setup

1. Download all the Node.js dependencies with `Yarn` or any other package manager:

`$ yarn install` or `$ npm install`

2. If you want to run this application in development mode, use the `start` script:

`$ yarn start` or `$ npm run start`

**Important**: This application uses `Mapbox` as its default map API. Be sure to check the [Mapbox documentation](https://www.mapbox.com/) to learn more, and make sure to set up the `.env` file.

Since the `.env` file is not included on this repository, create a `.env` file on the root folder of this project and add the following key with your Mapbox API token :

```
REACT_APP_MAPBOX_TOKEN=[YOUR TOKEN]
```
