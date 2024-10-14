# Serverless SQL App with Authentication and User CRUD

This project is a Serverless application built with AWS Lambda functions and API Gateway, featuring user authentication and CRUD operations using MySQL. It includes JWT-based authentication, separate handlers for different operations, and uses the Serverless Framework for deployment.

## Features

- User authentication (register and login)
- User CRUD operations
- JWT-based authentication
- MySQL integration using serverless-mysql
- Serverless Framework for easy deployment
- Environment variable management using AWS SSM Parameter Store

## Project Structure

```
.
├── src/
│   ├── config/
│   │   └── database.js
│   ├── handlers/
│   │   ├── auth.js
│   │   └── user.js
│   ├── middleware/
│   │   └── auth.js
│   └── models/
│       └── User.js
├── serverless.yml
├── package.json
└── README.md
```

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up your AWS credentials
4. Create the necessary parameters in AWS SSM Parameter Store:
   ```
   aws ssm put-parameter --name /db-host --value "your-db-host" --type String
   aws ssm put-parameter --name /db-user --value "your-db-user" --type String
   aws ssm put-parameter --name /db-password --value "your-db-password" --type SecureString
   aws ssm put-parameter --name /db-name --value "your-db-name" --type String
   aws ssm put-parameter --name /jwt-secret --value "your-jwt-secret" --type SecureString
   ```
5. Deploy the application: `npm run deploy`
6. For local development: `npm start`

## API Endpoints

- POST /auth/register - Register a new user
- POST /auth/login - Login and receive a JWT token
- GET /users - Get all users (requires authentication)
- GET /users/{id} - Get a specific user (requires authentication)
- PUT /users/{id} - Update a user (requires authentication)
- DELETE /users/{id} - Delete a user (requires authentication)

## Contributing

Please feel free to submit issues, fork the repository and send pull requests!

## License

This project is licensed under the MIT License.