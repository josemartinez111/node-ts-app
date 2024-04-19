// ---------------------------------------------------------
//              modules/endpoints/UseEndPoints.ts
// ---------------------------------------------------------

import { FastifyReply } from "fastify";
import { HealthcheckRequest } from "../../common/types/requestTypes";
import { HealthcheckResponse } from "../../common/types/responseTypes";
// ---------------------------------------------------------

export async function UseEndPoints() {
	const healthcheckEndpoint = async (
		request: HealthcheckRequest,
		reply: FastifyReply) => {
		
		// Create a new object with updated properties
		const requestBody = {
			...request.body,
			msg: "mundo",
			status: "200-OK",
		};
		
		const response: HealthcheckResponse = {
			key: "Hola",
			metedata: {
				value: requestBody.msg,
				statuscode: requestBody.status,
			},
		};
		
		reply.send(response);
	};
	
	return {
		healthcheckEndpoint,
	};
}
// ---------------------------------------------------------