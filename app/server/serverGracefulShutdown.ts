// ---------------------------------------------------------
//                  server/UseCreateServer.ts
// ---------------------------------------------------------

import { FastifyInstance } from "fastify";
// ---------------------------------------------------------

export function serverGracefulShutdown(fastify: FastifyInstance,
	signals: Array<string>): void {
	
	// Handling shutdown signals
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