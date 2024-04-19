// ---------------------------------------------------------
//                       app/app.ts
// ---------------------------------------------------------

import { runFastify } from "./runFastify";
import dotenv from 'dotenv';
// ----------------------------------------------------------
//                      MAIN_FUNCTION
// ----------------------------------------------------------

// Load environment variables from .env file
dotenv.config();
// ---------------------------------------------------------

async function main() {
	
	await runFastify();
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
