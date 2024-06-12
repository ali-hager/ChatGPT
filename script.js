import { config } from "dotenv";
import { OpenAI } from "openai";
import readline from "readline";

config();
const openai = new OpenAI({ apiKey: process.env.API_KEY });

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
