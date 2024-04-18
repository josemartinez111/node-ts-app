// ---------------------------------------------------------
//                  server/UseGenerateSSLCert.ts
// ---------------------------------------------------------

import fs from 'fs';
// ---------------------------------------------------------

interface SSLOptions {
	key: string;
	cert: string;
}
// ---------------------------------------------------------

export const UseGenerateSSLCert = (): SSLOptions => {
	const certPath = "app/server/certs/localhost+2.pem";
	const keyPath = "app/server/certs/localhost+2-key.pem";
	
	const cert = fs.readFileSync(certPath, 'utf8');
	const key = fs.readFileSync(keyPath, 'utf8');
	
	return {
		key,
		cert,
	};
};
// ---------------------------------------------------------