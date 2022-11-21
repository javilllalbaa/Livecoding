const express = require('express');
const app = express();
const { items } = require('./routes');

app.set('port', 4011);

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next()
});

app.use(items);

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
})