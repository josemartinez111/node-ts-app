// ---------------------------------------------------------
//                  server/createServer.ts
// ---------------------------------------------------------

import { FastifyInstance } from "fastify";
// ---------------------------------------------------------

export function setupGracefulShutdown(fastify: FastifyInstance, signals: Array<string>): void {
	signals.forEach((signal: string) => {
		process.on(signal, async () => {
			console.log(`Received ${signal}, closing server...`);
			await fastify.close();
			console.log('Server closed. Process exiting.');
			process.exit(0);
		});
	});
}
// ---------------------------------------------------------