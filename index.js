const_DIRECTION = {
    ADJUSTMENT: true,
}
// const path = require('path')
const fs = require('fs')
const bodyParser = require('body-parser');
const cors = require('cors')
express = require('express');
app = express();
//library trong
const config = require('./config')
const logger = require('./lib/logger')
//init express
app.use(cors())
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(express.json());

if (config.ENV.includes("PRODUCT")) {
    //product
} else {
    app.listen(config.PORT, () => {
        console.log(`Server listen port ${config.PORT}`)
        logger('info').info(`Server listen port ${config.PORT}`)
    })
}
// Cross domain
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

require('./webapi');