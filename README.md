# Parcel Mario with server + mobiscroll

## What the project does?

This application gives the parcel shipping price from any country in the world to any country in the world. In this version I use library mobiscroll. At this moment is giving a prices from website: https://www.parcelmonkey.co.uk/. At later stage of this application, there will be more companies like parcelmonkey, so will compare the prices.
By default, weight and dimensions are set to minimum values and postcode are in UK mainland. Is possible to amend this values (by clicking into "Parcel larger than 1 m?") with selected country (source and destination), postcode, weight and dimensions.

## Technical notes

- Run `npm install` after cloning to download all dependencies
- Use `npm run go` to build application (in watch mode) and run server (with nodemon so will restart server on any changes)
- Go to website https://www.parcelmonkey.co.uk/ and sign up. Then go to https://www.parcelmonkey.co.uk/apiSettings.php to create User ID and API Key. Create in main folder of this repo file .env and use own values in PARCELMONKEY_USERID and PARCELMONKEY_TOKEN, example:
  PARCELMONKEY_APIVERSION=3.1
  PARCELMONKEY_USERID=123456
  PARCELMONKEY_TOKEN=a1Bc9Wwld9

## Inspiration

My personal experience, where I discovered a problem which will be solved in the next stages of the development of this application (comparing prices from different sites). Stylistics I modeled from: https://www.parcelmonkey.co.uk/

## What technologies it uses?

- HTML5 - BEM class names
- CSS3 (SCSS)
- Java Script ES6
- React
- Node.js
- Express
- Implemented but not used yet database Postgres
- Responsive Web Design (with mobile first approach)
