const express = require('express');
const consign = require('consign');
// const bodyParser = require('body-parser');

module.exports = () => {
    
    const app = express();

    // deprecated
    // app.use(bodyParser.urlencoded({extended: true}));
    // app.use(bodyParser.json());
    app.use(express.urlencoded({extended: true}))
    app.use(express.json())

    consign()
        .include('controllers')
        .into(app);

    return app;
}
