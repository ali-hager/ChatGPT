# AI Chatbot

Welcome to my **AI Chatbot for Kids** project! While it is currently a basic AI chatbot, it is being developed to be more suitable for kids by offering a fun and educational experience for children by allowing them to ask questions and receive answers from the OpenAI API through an interactive web interface.

![Screen Shot 2024-06-13 at 2 33 38 PM](https://github.com/ali-hager/ChatGPT/assets/156130068/e70d8dd2-bd88-4d06-b516-b8109dcf9dc1)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Setup](#setup)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Development Process](#development-process)
- [Future Plans](#future-plans)
- [License](#license)

## Overview

The AI Chatbot for Kids is designed to eventually provide engaging and educational interactions for children by answering their questions using the OpenAI API. Initially, it was a command-line application using `readline`, and it has now evolved into a basic web application using HTML.

## Features

- User-friendly web interface for asking questions
- Real-time responses from the OpenAI API

## Setup

Follow these steps to set up the project on your local machine.

### Prerequisites

- Node.js installed
- npm (Node package manager) installed

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ali-hager/ChatGPT.git
   cd chatgpt
   ```

2. Install server dependencies:

   ```bash
   npm install
   ```

3. Install client dependencies:

   ```bash
   cd client
   npm install
   cd ..
   ```

4. Set up your OpenAI API key:

   Create a `.env` file in the root directory and add your OpenAI API key:

   ```env
   OPEN_AI_API_KEY=your_openai_api_key
   ```

### Running the Application

1. Start the backend server:

   ```bash
   node script.js
   ```

2. Open your browser and navigate to `http://localhost:3000` to use the chatbot.

## Usage

- Enter a question in the input field and click the "Ask" button.
- The chatbot will process the question using the OpenAI API and display the answer below the input field.

## Technologies Used

- **Backend**: Node.js, Express
- **Frontend**: HTML, CSS
- **API**: OpenAI API
- **Other**: `readline` for initial command-line interaction

## Development Process

### Initial Phase: Command-line Interface

The project started with a simple command-line interface using the `readline` module to interact with the OpenAI API. This allowed basic question-and-answer functionality in the terminal.

### Transition to Web Application

To make the chatbot more user-friendly and accessible, the project evolved into a web application using HTML for the frontend.

### Future Plans: React Frontend

A branch has been created to transition the frontend to React, providing a more dynamic and interactive user experience.

## Future Plans

The project aims to include the following features to make it more suitable for children:

- Simplified language and responses
- Interactive and engaging UI elements
- Parental controls and monitoring options

## License

This project is licensed under the MIT License.
