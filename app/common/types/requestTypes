// ---------------------------------------------------------
//                common/types/requestType.ts
// ---------------------------------------------------------

import { FastifyRequest } from "fastify";
// ---------------------------------------------------------

interface HealthcheckRequestType {
	// Add your request properties here
	msg: string;
	status: string;
}

export type HealthcheckRequest = FastifyRequest<{
	Body: HealthcheckRequestType;
}>
// ---------------------------------------------------------