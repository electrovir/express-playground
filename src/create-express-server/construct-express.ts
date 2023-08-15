import express, {Express} from 'express';

function getExpressPortNumber(): number {
    return Number(process.env.PORT) || 3000;
}

export function constructExpress(setupEndpoints: (params: {expressServer: Express}) => void) {
    const expressServer = express();
    const port = getExpressPortNumber();

    expressServer.get('/non-blocking', (req, res) => {
        res.status(200).send('This page is non-blocking');
    });

    expressServer.use(({method, path}, res, next) => {
        console.info(`${method}: ${path}`);
        next();
    });

    setupEndpoints({expressServer});

    expressServer.use(({method, path}, res) => {
        res.status(404).send(`'${method}: ${path}' not supported.`);
    });

    return expressServer.listen(port, () => {
        console.log(`🚀 Express listening on port ${port}`);
    });
}
