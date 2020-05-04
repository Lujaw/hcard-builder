const express = require("express");
const bodyParser = require("body-parser");
const view = require("./helpers/view");


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/static', express.static('dist/public'));

const initialData = {
  givenName: 'Sam',
  surname: 'Fairfax',
  email: 'sam.fairfax@fairfaxmedia.com.au',
  phone: '0292822833',
  houseNumber: '100',
  street: 'Harris Street',
  suburb: 'Pyrmont',
  state: 'NSW',
  postcode: '2009',
  country: 'Australia',
  avatar: "/static/img/Avatar.png"
};


app.get("/", (req, res) => {
  const views = view.renderCardTemplate();
  res.send(views);
});


app.listen(3000, () => console.log('listening on port 3000'))

