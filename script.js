import { config } from "dotenv";
config();

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(cors());

app.post("/", async (req, res) => {

  const { message } = req.body;

  const completion = await openai.chat.completions.create({
    messages: [{ role: "user", content: `${message}` }],
    model: "gpt-3.5-turbo",
  });
  res.json({
    completion: completion.choices[0].message,
  });
});

import OpenAI from "openai";
import readline from "readline";

const openai = new OpenAI({
  organization: "org-zLQRXWN471215HzDCc7JXJRs",
  apiKey: process.env.API_KEY,
});

const userInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

userInterface.prompt();
userInterface.on("line", async input => {
  const res = await openai.chat.completions
  .create({
    messages: [{ role: "user", content: input }],
    model: "gpt-3.5-turbo",
  })
  console.log(res.choices[0].message.content);
  userInterface.prompt()
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
