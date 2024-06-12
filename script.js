import { config } from "dotenv";
import { OpenAI } from "openai";
import readline from "readline";

//setup server
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

config();
const openai = new OpenAI({ apiKey: process.env.API_KEY });

// connect to readline
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

// const app = express();
// app.use(bodyParser.json());
// app.use(cors());

// //endpoint for chatgpt
// app.post("/chat", async (req, res) => {
//   try {
//     const { input } = req.body;

//     const completion = await openai.chat.completions.create({
//       messages: [
//         {
//           role: "system",
//           content: "You are a helpful assistant designed to output JSON.",
//         },
//         { role: "user", content: "Who won the world series in 2020?" },
//       ],
//       model: "gpt-3.5-turbo-0125",
//       response_format: { type: "json_object" },
//     });
//     res.json(completion.choices[0].message.content);
//     console.log(completion.choices[0].message.content);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// const port = 8080;
// app.listen(port, () => {
//   console.log(`Server is listening on http://localhost:${port}`);
// });
