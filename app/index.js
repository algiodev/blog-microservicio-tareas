const result = require('dotenv').config();
if (result.error) {
    throw result.error;
}

const { initWorker } = require('./worker');

async function init() {
    try {
        initWorker();
        console.log('APP_INIT');
    } catch (error) {
        console.log('ERROR_APP_INIT', error);
    }
}

init();
