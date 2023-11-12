import { FastifyInstance, RouteOptions } from 'fastify';
import { HelloController } from '@/controller/hello';
import { HelloSchema } from '@/schema/hello';

// TODO: seperate controllers
const routes: RouteOptions[] = [
    {
        method: 'GET',
        url: '/hello',
        handler: (req, reply) => {
            reply.send('world');
        },
    },
    {
        method: 'POST',
        url: '/hello',
        schema: HelloSchema,
        handler: HelloController.postHello,
    },
];

export const installRoutes = (fastify: FastifyInstance) => {
    // health
    fastify.get('/health', (req, reply) => reply.send('ok'));

    fastify.register((app, _, done) => {
        routes.map((route) => app.route(route));
        done();
    }, { prefix: 'api/v1' });
};
