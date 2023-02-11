const { Queue } = require('bullmq');

// @ts-ignore
const emailQueue = new Queue('email', {
    connection: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT
    }
});

async function addTask(data) {
    try {
        await emailQueue.add('email', data, {
            removeOnComplete: true,
            removeOnFail: true,
            jobId: data.id,
            delay: 3000,
            attempts: 3,
            backoff: {
                type: 'exponential',
                delay: 15000,
            }
        });
        console.log({ msg: 'TASK_ADDED', type: 'email', id_request: data.id });
        return Promise.resolve();
    } catch (error) {
        console.error({ msg: 'ERROR_TASK_ADDED', type: 'email', id_request: data.id });
        return Promise.reject(error);
    }
}



async function newEmail(){
    await addTask({
        name: 'AlgioDev Corp',
        email: 'alfredo@algio.dev',
        to: 'user-email@fake.local',
        subject: 'Welcome',
        context: {
            name: 'Peter Griffin'
        },
        id: 'as1234'
    })
}

newEmail();
