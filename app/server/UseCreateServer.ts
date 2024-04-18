// ---------------------------------------------------------
//                  server/UseCreateServer.ts
// ---------------------------------------------------------

import Fastify, { FastifyInstance, FastifyListenOptions } from "fastify";
import { registerRoutes } from "../modules/routes/registerRoutes";
import { UseGenerateSSLCert } from "./UseGenerateSSLCert";
// ---------------------------------------------------------

interface CreateServerOptions {
	fastify: FastifyInstance;
	LISTEN_OPTS: FastifyListenOptions;
	GRACEFUL_SIG_SHUTDOWN: Array<string>;
}
// ---------------------------------------------------------

export async function UseCreateServer(): Promise<CreateServerOptions> {
	// Generate SSL Certificates
	let { key, cert } = UseGenerateSSLCert();
	// Creating a Fastify instance with a logger
	const fastifyServerInstance = Fastify({
		logger: {
			transport: {
				target: "pino-pretty", // dont use in production
				options: {
					translateTime: "HH:MM:ss Z",
				},
			},
		},
		// adding ssl options to stop the warning when going to https
		https: {
			key: key,
			cert: cert,
		}
	});
	
	// Defining port and host options
	const LISTEN_OPTS: FastifyListenOptions = {
		port: 8080,
		host: "localhost",
	};
	
	// Defining signals for graceful shutdown
	const GRACEFUL_SIG_SHUTDOWN: Array<string> = ['SIGINT', 'SIGTERM'];
	// Registering all routes
	fastifyServerInstance.register(registerRoutes, { prefix: "/api" });
	
	return {
		fastify: fastifyServerInstance,
		LISTEN_OPTS,
		GRACEFUL_SIG_SHUTDOWN,
	};
}
// ---------------------------------------------------------