const express = require('express');
const app = express()

app.use(express.json());

const expressRoutes = require('./routes/expressRoutes')

app.use(expressRoutes)

app.listen(350, () =>  console.log('server is running'))
