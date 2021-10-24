const express = require('express');

const app = express();
const path = require("path");
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

const htmlRouter = require('./routes/htmlRoutes/index');
const apiRouter = require('./routes/apiRoutes/index');

app.use(htmlRouter);
app.use('/api', apiRouter);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`)
});