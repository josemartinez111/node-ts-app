// --------------------------------------------------------- 
//                  server/createServer.ts
// ---------------------------------------------------------

import Fastify, { FastifyInstance, FastifyListenOptions } from "fastify";
// ---------------------------------------------------------

interface ServerOptions {
	fastify: FastifyInstance;
	LISTEN_OPTS: FastifyListenOptions;
	GRACEFUL_SIG_SHUTDOWN: Array<string>;
}
// ---------------------------------------------------------

export function createServer(): ServerOptions {
	const fastify = Fastify({
		logger: {
			transport: {
				target: "pino-pretty", // dont use in production
				options: {
					translateTime: "HH:MM:ss Z",
				},
			},
		},
	});
	
	const LISTEN_OPTS: FastifyListenOptions = {
		port: 8080,
		host: "0.0.0.0",
	};
	
	const GRACEFUL_SIG_SHUTDOWN: Array<string> = ['SIGINT', 'SIGTERM'];
	
	return {
		fastify,
		LISTEN_OPTS,
		GRACEFUL_SIG_SHUTDOWN,
	};
}
// ---------------------------------------------------------