# 🎳 Bowling API 

## 🚀 Getting started

### Installation

- Install packages using `yarn`
- Install a Java JDK from [here](https://www.oracle.com/uk/java/technologies/javase-downloads.html)
- Install dynamo DB locally using `yarn db:install`

### To set up the rest of the project

- Run the DB in one terminal using `yarn db:run`
  - This will also run any migrations.
- Run serverless offline in another terminal using `yarn dev`
- You can then post to: `localhost:3000/dev/updateScore`


## 🎯 Aims

- Using the Serverless framework, create an API that tracks the score for a (one-player) game of bowling. 
- To start with, you'll need to update the existing `/updateScore` endpoint.
- It should store the scores in a DynamoDB table.
  - For simplicity, you don't need to use migrations to set it up.
- Then, create another endpoint `/getScore` that should return the score.
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


## 📚 References

- Serverless DynamoDB Local: https://www.serverless.com/plugins/serverless-dynamodb-local
  - GitHub: https://github.com/99x/serverless-dynamodb-local
- DynamoDB examples: https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/dynamodb-examples.html
