const { Worker } = require('bullmq');
const { email } = require('./email');

const _connection = { host: process.env.REDIS_HOST, port: process.env.REDIS_PORT }
const _options = { connection: _connection };

exports.initWorker = () => {
    const currela = new Worker('email', async job => {
        await email(job.data)
        // @ts-ignore
    }, _options);

    currela.on('completed', (job) => {
      console.log('TASK_FINISHED', job?.id);
    });

    currela.on('failed', (job) => {
        console.log('TASK_FAILED', job?.id, job?.attemptsMade )
    });
}

