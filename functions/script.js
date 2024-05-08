import { config } from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import OpenAI from "openai";
import readline from "readline";

config();

const app = express();
const port = process.env.PORT || 3000;
const openai = new OpenAI({
  organization: "org-zLQRXWN471215HzDCc7JXJRs",
  apiKey: process.env.API_KEY,
});

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to my API!");
});

app.post("/", async (req, res) => {
  const { messages } = req.body;
  console.log(messages);

  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant chatbot.",
      },
      ...messages,
    ],
    model: "gpt-3.5-turbo",
  });
  res.json({
    completion: completion.choices[0].message,
  });
});

const userInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

userInterface.prompt();
userInterface.on("line", async (input) => {
  const res = await openai.chat.completions.create({
    messages: [{ role: "user", content: input }],
    model: "gpt-3.5-turbo",
  });
  console.log(res.choices[0].message.content);
  userInterface.prompt();
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});