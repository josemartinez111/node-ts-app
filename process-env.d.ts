// ---------------------------------------------------------
//                     process-env.d.ts
// ---------------------------------------------------------

declare global {
	namespace NodeJS {
		// noinspection JSUnusedGlobalSymbols
		interface ProcessEnv {
			[key: string]: string | undefined;
			PORT: string;
			DATABASE_URL: string;
			// add more environment variables and their types here
		}
	}
}
// ---------------------------------------------------------