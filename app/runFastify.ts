// --------------------------------------------------------- 
//                    app/runFastify.ts
// ---------------------------------------------------------

import { serverGracefulShutdown } from "./server/serverGracefulShutdown";
import { UseCreateServer } from "./server/UseCreateServer";
// ---------------------------------------------------------

export const runFastify = async () => {
	const {
		fastify,
		LISTEN_OPTS,
		GRACEFUL_SIG_SHUTDOWN,
	} = await UseCreateServer();
	
	await fastify.listen(LISTEN_OPTS);
	serverGracefulShutdown(fastify, GRACEFUL_SIG_SHUTDOWN);
};
// ---------------------------------------------------------