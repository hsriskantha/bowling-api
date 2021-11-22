import { APIGatewayProxyHandler } from "aws-lambda";
import "source-map-support/register";

/**
 * A QUICK GUIDE TO SCORING
 *
 * - Within a frame, you have up to two rolls to knock down ten pins.
 * - The number of pins you knock down is added to your score.
 *
 * - If you knock down all ten pins with two rolls (spare):
 *   - Your next roll is added to your score for this frame.
 *
 * - If you knock down all ten pins with your first roll (strike):
 *   - Your next two rolls are added to your score for this frame.
 *   - You do not get your second roll within this frame.
 *
 * - In the tenth and final frame:
 *   - If you get a strike, you get two more rolls.
 *   - If you get a spare, you get one more roll.
 *
 * - Hence a perfect game is twelve consecutive strikes for 300 points.
 */

export const update: APIGatewayProxyHandler = async (event) => {
  console.log(event);

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello, world!",
    }),
  };
};
