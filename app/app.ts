// FILE: app/app.ts
// _______________________________________________

import { UseCreateServer } from "./server/UseCreateServer";
import { serverGracefulShutdown } from "./server/serverGracefulShutdown";
// ----------------------------------------------------------
//                      MAIN_FUNCTION
// ----------------------------------------------------------

async function main() {
	
	const {
		fastify,
		LISTEN_OPTS,
		GRACEFUL_SIG_SHUTDOWN,
	} = await UseCreateServer();
	
	await fastify.listen(LISTEN_OPTS);
	serverGracefulShutdown(fastify, GRACEFUL_SIG_SHUTDOWN);
}
// ---------------------------------------------------------
//                    CALL_MAIN/CATCH_ERRORS
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


// __________________________________________________________
