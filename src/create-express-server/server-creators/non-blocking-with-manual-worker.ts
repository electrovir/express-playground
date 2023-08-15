import {resolve} from 'path';
import {Worker} from 'worker_threads';
import {constructExpress} from '../construct-express';

const workerPath = resolve(__dirname, '..', 'worker.ts');

export function createNonBlockingManualWorkerExpressServer() {
    constructExpress(({expressServer}) => {
        expressServer.get('/blocking', async (req, res) => {
            const worker = new Worker(workerPath);
            worker.on('message', (data) => {
                res.status(200).send(`result is ${data}`);
            });
            worker.on('error', (msg) => {
                res.status(404).send(`An error occurred: ${msg}`);
            });
        });
    });
}
