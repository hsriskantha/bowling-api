# 🎳 Bowling API

## 🎯 Aims

- Using the Serverless framework, create an API that tracks the score for a (one-player) game of bowling.
- It should accept the score from a single frame, and return the total score.
- Store any data in memory for now.
- Note that this is deliberately a challenge that you're unlikely to finish!

## ✏️ A quick guide to scoring

- Within a frame, you have up to two rolls to knock down ten pins.
- The number of pins you knock down is added to your score.
- If you knock down all ten pins with two rolls (spare):
  - Your next roll is added to your score for this frame.
- If you knock down all ten pins with your first roll (strike):
  - Your next two rolls are added to your score for this frame.
  - You do not get your second roll within this frame.
- In the tenth and final frame:
  - If you get a strike, you get two more rolls which are added to your score.
  - If you get a spare, you get one more roll which is added to your score.
- Hence a perfect game can be completed in twelve rolls, for 300 points.

## 🚀 Running the Code

For the purposes of this exercise, it's simplest to use test-driven development.

You can run the tests in watch mode using:

```
yarn test --watch
```

However, if you wanted to run your code locally:

- Run serverless offline in another terminal using `yarn dev`
- You can then post to: `localhost:3000/dev/updateScore`
- You can post using curl, for example:

```
curl -X POST localhost:3000/dev/updateScore -H "Content-Type: application/json" -d '{"frame": 1}'
```
