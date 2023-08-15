const {parentPort} = require('worker_threads');

async function runIntenseCalculation() {
    return new Promise((resolve, reject) => {
        let counter = 0;
        for (let i = 0; i < 20_000_000_000; i++) {
            counter++;
        }
        resolve(counter);
    });
}

runIntenseCalculation().then((result) => parentPort?.postMessage(result));
