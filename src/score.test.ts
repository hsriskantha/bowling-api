import { APIGatewayProxyEvent } from "aws-lambda";

import { update } from "./score";

describe("score", () => {
  test("returns hello world", async () => {
    const event = {} as any as APIGatewayProxyEvent;
    const response = await update(event, null, () => {});

    const message = response ? JSON.parse(response.body).message : "";
    expect(message).toEqual("Hello, world!");
  });
});
