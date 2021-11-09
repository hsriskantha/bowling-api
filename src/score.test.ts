import { APIGatewayProxyEvent } from "aws-lambda";

import { update } from "./score";

describe("score", () => {
  beforeEach(() => {
    // Run code before each test
  });

  test("returns hello world", async () => {
    const event = {
      body: {},
    } as APIGatewayProxyEvent;
    const response = await update(event, null, () => {});

    const message = response ? JSON.parse(response.body).message : "";
    expect(message).toEqual("Hello, world!");
  });
});
