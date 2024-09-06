# Thirsty Server

Thirsty Server is a backend API built with Node.js, Express, MongoDB, and TypeScript for managing beauty products. It includes modern security practices, user authentication, and validation features to ensure smooth and secure product management.

## Features

- **Authentication**: JWT-based user authentication.
- **Security**: Protected API endpoints using `helmet`, `cors`, `hpp`, and data sanitization with `express-mongo-sanitize`.
- **Validation**: Input validation using `validator`, and password hashing with `bcrypt`.
- **Database**: MongoDB is used for data storage, connected via Mongoose.
- **Development**: `nodemon` is configured for hot-reloading in development mode.
- **Code Quality**: ESLint and Prettier are configured for linting and code formatting.
- **Pre-commit Checks**: Husky hooks ensure code quality before each commit.

## Getting Started

### Prerequisites

- Node.js >= 18
- MongoDB

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/arifnextdev/thirsty-server.git
   cd thirsty-server
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file for environment variables:

   ```bash
   NODE_ENV=development
   PORT=5000
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```

4. Build the project:

   ```bash
   npm run build
   ```

5. Start the server:

   ```bash
   npm start
   ```

### Development

To run in development mode with hot-reloading:

```bash
npm run dev
```

### Available Scripts

- `npm start`: Starts the production server.
- `npm run dev`: Starts the development server with `nodemon`.
- `npm run build`: Compiles TypeScript to JavaScript.
- `npm run lint:check`: Runs ESLint for code linting checks.
- `npm run lint:fix`: Fixes any linting issues.
- `npm run prettier:check`: Checks code formatting using Prettier.
- `npm run prettier:fix`: Fixes code formatting using Prettier.
- `npm run up`: Runs the `upgrade.sh` script.

## License

This project is licensed under the MIT License.
```

This file is ready to be added to your GitHub repository. Let me know if you'd like to make any changes!
