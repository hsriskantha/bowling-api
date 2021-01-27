import { APIGatewayProxyHandler } from 'aws-lambda';
import { DynamoDB } from 'aws-sdk';

import 'source-map-support/register';

const documentClient = new DynamoDB.DocumentClient({
  region: 'localhost',
  endpoint: 'http://localhost:8000'
});

export const update: APIGatewayProxyHandler = async (event, _context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello, world!',
    }),
  };
}
