// FILE: app/app.ts
// _______________________________________________

import { fastify, FastifyReply, FastifyRequest } from "fastify";
// _______________________________________________

/** --------------------------------------------------------- */
/**                      HTTP-SERVER                          */
/** --------------------------------------------------------- */

const fast = fastify();
fast.get("/", async (_request: FastifyRequest, _reply: FastifyReply) => {
	return {
		key: "Hola",
		metedata: {
			value: "mundo",
			status: "200-OK",
		}
	};
});

const optsPort = { port: 8080 };

fast.listen(optsPort, () => {
	console.log(`Server is running on: http://localhost:${ optsPort.port }`);
});
/** --------------------------------------------------------- */
/**                MAIN_FUNCTION_FOR_CONSOLE_APP              */
/** --------------------------------------------------------- */


const main = () => {
	spacer("=");
	// __________________________________________________________
	
	console.log("\n");
	console.log("Hola mundo!");
	// __________________________________________________________
	spacer("=");
};

main();
/** --------------------------------------------------------- */
/**                      CODE_SANDBOX                         */
/** --------------------------------------------------------- */

function spacer(char: string = "_", lengthOfChar: number = 55) {
	return char.repeat(lengthOfChar);
}
// __________________________________________________________
