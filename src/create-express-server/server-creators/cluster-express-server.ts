import cluster from 'express-cluster';
import {cpus} from 'os';
import {runIntenseCalculation} from '../common-endpoints';
import {constructExpress} from '../construct-express';

const workerCount = cpus().length - 1;

export function createClusteredExpressServer() {
    return cluster(
        (worker) => {
            return constructExpress(({expressServer}) => {
                expressServer.use(({path}) => {
                    console.info(`worker ${worker.id} handling ${path}`);
                });

                expressServer.get('/blocking', async (req, res) => {
                    const result = await runIntenseCalculation();
                    res.status(200).send(`result is ${result}`);
                });
            });
        },
        {
            count: workerCount,
            verbose: true,
        },
    );
}
