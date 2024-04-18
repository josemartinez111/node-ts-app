// ---------------------------------------------------------
//                  routes/registerRoutes.ts
// ---------------------------------------------------------

import { FastifyInstance, FastifyPluginAsync } from "fastify";
import { UseEndPoints } from "../endpoints/UseEndPoints";
// ---------------------------------------------------------

export const registerRoutes: FastifyPluginAsync = async (fastify: FastifyInstance) => {
	// Destructuring all the endpoints
	const { healthcheckEndpoint } = await UseEndPoints();
	
	// ---------------------------------------------------------
	//                 Registering all routes
	// ---------------------------------------------------------
	
	// Healthcheck endpoint
	fastify.get("/", healthcheckEndpoint);
};
// ---------------------------------------------------------