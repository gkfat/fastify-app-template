import config from 'config';
import 'dotenv/config';
import { env } from 'process';
import { boot, shutdown } from './boot';

const startServer = async () => {
    const app = await boot();
    const port = config.get<number>('app.port');

    app.listen({
        host: '0.0.0.0.',
        port,
    }).then(() => {
        app.log.info(`ENV: ${env.NODE_ENV}`);
    }).catch((err) => {
        app.log.error(err);
        shutdown();
    });
};

startServer();
