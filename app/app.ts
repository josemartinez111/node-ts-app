// FILE: app/app.ts
// _______________________________________________

import { FastifyReply, FastifyRequest } from "fastify";
import { createServer } from "./server/createServer";
import { setupGracefulShutdown } from "./server/serverShutdown";
// ---------------------------------------------------------
//                      HTTP-SERVER
// ---------------------------------------------------------

const { fastify, LISTEN_OPTS, GRACEFUL_SIG_SHUTDOWN } = createServer();

const healthcheckEndpoint = async (_request: FastifyRequest, _reply: FastifyReply) => ({
	key: "Hola",
	metedata: {
		value: "mundo",
		statuscode: "200-OK",
	},
});

fastify.get("/", healthcheckEndpoint);
// ----------------------------------------------------------
//                      MAIN_FUNCTION
// ----------------------------------------------------------

async function main() {
	spacer("=");
	// __________________________________________________________
	
	await fastify.listen(LISTEN_OPTS);
	setupGracefulShutdown(fastify, GRACEFUL_SIG_SHUTDOWN);
	// __________________________________________________________
	spacer("=");
}
// ---------------------------------------------------------
//               SERVER_SHUTDOWN/CATCH_ERRORS
// ---------------------------------------------------------

main().catch((err: unknown): void => {
	if (err instanceof Error)
		console.error('Failed to start server:', err.message);
	// Re-throw the error for further handling
	throw err;
});
//  ---------------------------------------------------------
//                        CODE_SANDBOX
//  ---------------------------------------------------------

function spacer(char: string = "_", lengthOfChar: number = 55) {
	return char.repeat(lengthOfChar);
}
// __________________________________________________________
