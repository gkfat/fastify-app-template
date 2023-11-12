import { FastifyReply, FastifyRequest } from 'fastify';
import { HelloService } from '@/service/hello';

export class HelloController {
    static async postHello(req: FastifyRequest, reply: FastifyReply) {
        const res = await HelloService.postHello();
        reply.send(res);
    }
}
