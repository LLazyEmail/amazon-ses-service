const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res, next) => {
  res.send(`Test message ${new Date()} `,)
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started on port: 3000");
});