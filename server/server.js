const path = require('path');
var express = require('express');



const publicPath = path.join(__dirname, '../public');
var app = express();

app.use(express.static(publicPath));

app.listen(3000, () => {
  console.log('Started on port 3000');
});
