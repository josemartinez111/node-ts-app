// ---------------------------------------------------------
//               common/types/responseType.ts
// ---------------------------------------------------------
// ---------------------------------------------------------

export interface HealthcheckResponse {
	key: string;
	metedata: {
		value: string;
		statuscode: string;
	};
}
// ---------------------------------------------------------