import {createBlockingExpressServer} from './create-express-server/server-creators/blocking-express-server';
import {createClusteredExpressServer} from './create-express-server/server-creators/cluster-express-server';
import {createNonBlockingManualWorkerExpressServer} from './create-express-server/server-creators/non-blocking-with-manual-worker';

const serverConstructors = {
    blocking: createBlockingExpressServer,
    nonBlocking: createNonBlockingManualWorkerExpressServer,
    clustered: createClusteredExpressServer,
};

serverConstructors.nonBlocking();
