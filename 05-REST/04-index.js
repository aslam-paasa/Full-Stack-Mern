const express = require('express');
const app = express();
const port = 8080;
const path = require('path');

app.set('view engine', 'ejs');
app.get('views', path.join(__dirname, 'views'));

app.listen(port, () => {
    console.log("listening to port : " + port);
})