import fastifyCors from '@fastify/cors';
import fastifyHelmet from '@fastify/helmet';
import 'dotenv/config';
import Fastify from 'fastify';
import { installRoutes } from '../route';
import { logger } from '../util/logger';

// TODO: graceful shutdown
export const shutdown = async () => {
    process.exit(1);
};

export const boot = async () => {
    const fastify = Fastify({
        logger: logger.app,
    });

    fastify.register(fastifyCors, {
        origin: '*',
    });

    fastify.register(fastifyHelmet);

    installRoutes(fastify);

    return fastify;
};
