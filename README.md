# Bookquelize

This application consists of a `client` in React and a `server` in Node.js with Express.js. It is a book registry application made as a recruitment assignment for a company.

A user can browse a collection of books and add new books.

The client is implemented using `create-react-app` and the server is implemented using `express-generator`.

## Installation

1. Start Docker containers and networks.

```BASH
npm run docker:up
```

## Considerations / TODOs

- Client
  - Fix environment variables not working
  - Split Modal into its own component
  - Implement a more elegant error handling
- Server
  - Implement/fix WebSocket
  - Book model ought to use `DATETIME` for `timestamp`
  - Figure out a more elegant way to get the sequelize Book model to Book service
  - Implement `express-validator`'s *Schema Validation* for Book
