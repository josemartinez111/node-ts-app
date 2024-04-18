# NodeJS/TS project template

#### Run the following command to install the project dependencies & update the project:
```powershell
npm i && npm update
```

### Dependencies

- **dotenv**: Loads environment variables from a `.env` file into `process.env`, making it easier to manage configuration and sensitive data.
- **fastifyServerInstance**: A fast and low overhead web framework for Node.js, designed to be a faster alternative to Express, especially suitable for building APIs.
- **readline-sync**: Provides a way to read input from the command line synchronously, useful for CLI applications requiring user interaction.

### DevDependencies

- **@types/jest**: TypeScript type definitions for Jest, enabling type checking for Jest test files.
- **@types/node**: TypeScript type definitions for Node.js, allowing TypeScript to understand Node.js built-in types.
- **@types/readline-sync**: TypeScript type definitions for `readline-sync`, enabling type checking when using `readline-sync`.
- **jest**: A delightful JavaScript testing framework with a focus on simplicity, used for writing unit and integration tests.
- **nodemon**: A utility that monitors for any changes in your source and automatically restarts your server, perfect for development.
- **prettier**: An opinionated code formatter that enforces a consistent style by parsing your code and reprinting it with its own rules.
- **ts-jest**: A Jest transformer with source map support that lets you use Jest to test projects written in TypeScript.
- **ts-node**: A TypeScript execution engine and REPL for Node.js, allowing you to execute TypeScript directly without pre-compilation.
- **typescript**: A typed superset of JavaScript that compiles to plain JavaScript, enabling optional static typing.
___
# Setting Up Local HTTPS for Development (SSL Certificate)

Setting up HTTPS for local development involves creating a trusted SSL/TLS certificate. The tool `mkcert` simplifies the process of generating a local Certificate Authority (CA) and trusted certificates.

## Prerequisites

- [Node.js](https://nodejs.org/)
- [mkcert](https://github.com/FiloSottile/mkcert)

## Installing mkcert

Install `mkcert` on macOS using Homebrew:

```bash
brew install mkcert
```

For other operating systems, refer to the [mkcert GitHub repository](https://github.com/FiloSottile/mkcert).

## Creating a Local Certificate Authority (CA)

Create and install a local CA:

```bash
mkcert -install
```

This adds the local CA to the system trust store, Firefox, and Java trust stores.

## Generating SSL/TLS Certificates

Generate SSL/TLS certificates for `localhost`:

```bash
mkcert localhost 127.0.0.1 ::1
```

This creates a certificate and key (`localhost+2.pem` and `localhost+2-key.pem`) that are automatically trusted.

## Integrating Certificates into Your Node.js Project

Place the generated certificates in a `certs` directory within your project for easy access.

### Loading the Certificates in Your Application

Modify your application to load the SSL/TLS certificates. Assuming the certificates are in a `certs` directory:

```typescript
import fs from 'fs';
import path from 'path';

interface SSLOptions {
	key: string;
	cert: string;
}

export const loadSSLCert = (): SSLOptions => {
	const certPath = path.join(__dirname, '..', 'certs', 'localhost+2.pem');
	const keyPath = path.join(__dirname, '..', 'certs', 'localhost+2-key.pem');
	
	const cert = fs.readFileSync(certPath, 'utf8');
	const key = fs.readFileSync(keyPath, 'utf8');
	
	return {
		key,
		cert,
	};
}
```

### Using the Certificates

Use the `loadSSLCert` function to provide the `key` and `cert` options when setting up your HTTPS server in Fastify. Note that when configuring your server, you should ensure the host option aligns with the domain specified in the SSL certificate. For instance, setting the host to `localhost` is necessary when your certificate is issued for `localhost`:

```typescript
// Defining port and host options
const LISTEN_OPTS: FastifyListenOptions = {
	port: 8080,
	host: "localhost", // Important: align with the domain specified in your SSL certificate
};
```

## Copying Certificates into Your Project

To copy the certificates to your project directory, use the following commands:

```bash
cp /Users/josemartinez/localhost+2.pem ~/Documents/ClonedProjects2024/big-o-notation-ts/app/server/certs/
cp /Users/josemartinez/localhost+2-key.pem ~/Documents/ClonedProjects2024/big-o-notation-ts/app/server/certs/
```

## Testing Your Setup

Navigate to `https://localhost:8080` in your browser to see your application served over HTTPS without browser security warnings.

## Note for Production

This setup is for local development only. For production, obtain SSL/TLS certificates from a recognized Certificate Authority (CA) to ensure secure internet accessibility.
