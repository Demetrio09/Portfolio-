// Requiring necessary npm packages
const express = require('express');
const exphbs = require('express-handlebars');

// Seting up port
const PORT = process.env.PORT || 3000;

// Creating express app configuring middleware
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.static('public/img'));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Requiring our routes
require('./routes/html-routes')(app);

// Loading a message to the user upon server start listen success
app.listen(PORT, () => console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT));