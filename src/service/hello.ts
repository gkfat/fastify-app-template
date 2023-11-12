export class HelloService {
    static async postHello() {
        const result = {
            hello: 'world',
        };
        return result;
    }
}
