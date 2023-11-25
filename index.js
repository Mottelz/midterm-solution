const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerOptions = require('./swagger.json');
const swaggerDocs = swaggerJsDoc(swaggerOptions);

const port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const gamesRouter = require('./components/games/router');
app.use('', gamesRouter);
const reviewsRouter = require('./components/reviews/router');
app.use('', reviewsRouter);

app.all('*', (err, req, res, next) => {
    console.log('ping');
    console.warn(err.stack);
    res.status(404).json({
        status: 'fail',
        message: `Can't ${req.method} ${req.url} on this server!`
    });
});

function errorHandler(err, req, res, next) {
    console.error(err.stack);
    res.status(500).json({
        status: 'error',
        message: 'Something went wrong on the server!'
    });
};
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});