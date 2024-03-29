import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import { schema } from './graphql';

// Config dotenv.
dotenv.config();

// Port.
const port = process.env.PORT || 9000;
// GraphQL path.
const path = '/graphql';

// Initialize server.
const server = new ApolloServer({
  schema
});
const app = express();
server.applyMiddleware({ app, path, cors: true });

// Body parser.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Enable cors.
app.use(cors());

// Routes.
app.get('/', (req, res) => res.send('<p>👋 Xin chào</p>'));

// Start server.
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
