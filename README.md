# Hcard Builder

:white_check_mark: Serves up the SPA

:white_check_mark: Server renders the SPA to support non-JS clients (uses Server Side Rendering)

:white_check_mark: Saves user inputed data to the server as they switch between form fields

:white_check_mark: Saves completed form data on user submission

:white_check_mark: On page reload, populates the form fields with the values previous saved

:white_check_mark: Is stateless, to support auto-scaling

## Requirements

- node.js 12.x or above
- docker (optional)

## Steps to run the App manually

```
  npm i
  npm run init:db
  npm start
```

## Steps to run the App using docker

```
docker-compose build
docker-compose up
```

Open the url http://localhost:3030

## Features

- Uses Server Side Rendering to serve the SPA
- Uses SQLite as the DB and Sequelize as the ORM
- Uses React Router to handle the routing
- Can use /cards route to list the created cards

## Challenges

- Due to the main.js being written using React v15, had following limitations
  - Warning: Accessing PropTypes via the main React package is deprecated
  - Could not use the hydrate method, and had to use the render method instead, hence
    the following warning
    - Warning: React attempted to reuse markup in a container but the checksum was invalid.
- Even tried migrating the code to version 16 using "React-codemod/React-PropTypes-to-prop-types"
  but since the code was minified, and it ran into some issues, abandoned the idea
- Have used server side validation for the input which redirects to a page outside SPA with status 422 and json payload as response. Its not a good user experience. Could not use res.local object to flash the error message.

### Changes made on the provided main.js file:

- Renamed it to hCard.js
- Adding hidden card Id in the form and the state for the put operation
- Using default value of "/static/img/Avatar.png" for the Avatar
- Adding the id value to the params in update
- Toggling the Submit button label when to Update for pre-existing cards

### Explanation

- Chose to add hidden field with id value populated to uniquely identify the card,
  so that they can be retrieved/updated from the db
- Chose to use sqlite db as its very light weight and suitable for this project.
  But for autoscaling, the db needs to be changed to Postgres, MySQL or similar.
  It would be minimal change as we are using Sequelize ORM.

## Enhancements to be done

- Add delete functionality to the cards
- Add the upload function as right now, the upload doesn't trigger http request
- Add tests for the client side code
- Use localStorage to store the data
