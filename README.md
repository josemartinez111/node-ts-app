# NodeJS/TS project template

#### Run the following command to install the project dependencies & update the project:
```powershell
npm i && npm update
```
#### Make sure to the `.git/` folder so like that you can start your own git setup:
```powershell
# MacOS
rm -rf .git

# Windows
rmdir /s /q .git
```

### Dependencies

- **dotenv**: Loads environment variables from a `.env` file into `process.env`, making it easier to manage configuration and sensitive data.
- **fastify**: A fast and low overhead web framework for Node.js, designed to be a faster alternative to Express, especially suitable for building APIs.
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
