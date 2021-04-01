import { APIGatewayProxyHandler } from "aws-lambda";
import "source-map-support/register";

export const update: APIGatewayProxyHandler = async (event) => {
  console.log(event);

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello, world!",
    }),
  };
};
