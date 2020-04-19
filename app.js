require('dotenv').config();
let express = require('express')
const bodyParser = require('body-parser')

const email = require('./server/routes/email/email.routes');
const template = require('./server/routes/template/template.routes');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/email', email);
app.use('/template', template);

app.listen(process.env.PORT || 3000, () => {
    console.log("Server started on port: 3000");
})
