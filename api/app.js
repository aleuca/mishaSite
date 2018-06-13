const express = require('express')
const port = 5001;
const app = express();


app.get('/', (req, res, next) => {
    res.send('route exists')
});


app.listen(port, (err) => {
    console.log(`listening on port ${port}`)
});