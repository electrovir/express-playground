import {runIntenseCalculation} from '../common-endpoints';
import {constructExpress} from '../construct-express';

export function createBlockingExpressServer() {
    constructExpress(({expressServer}) => {
        expressServer.get('/blocking', async (req, res) => {
            const result = await runIntenseCalculation();
            res.status(200).send(`result is ${result}`);
        });
    });
}
