# Chatbot for Kids

Welcome to the **Chatbot for Kids** project! This chatbot allows children to ask questions and receive answers from the OpenAI API through an interactive web interface.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Setup](#setup)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Development Process](#development-process)
- [License](#license)

## Overview

The Chatbot for Kids is a fun and educational tool designed to provide answers to children's questions using the OpenAI API. It started as a command-line application using `readline` and was then developed into a full-fledged web application with a React frontend.

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
   git clone https://github.com/yourusername/chatbot-for-kids.git
   cd chatbot-for-kids
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
   node server.js
   ```

2. Start the React frontend:

   ```bash
   cd client
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000` to use the chatbot.

## Usage

- Enter a question in the input field and click the "Ask" button.
- The chatbot will process the question using the OpenAI API and display the answer below the input field.

## Technologies Used

- **Backend**: Node.js, Express
- **Frontend**: React
- **API**: OpenAI API
- **Other**: `readline` for initial command-line interaction

## Development Process

### Initial Phase: Command-line Interface

The project started with a simple command-line interface using the `readline` module to interact with the OpenAI API. This allowed basic question and answer functionality in the terminal.

### Transition to API and React Frontend

To make the chatbot more user-friendly and accessible, the project evolved into a web application:

1. **API Development**: An Express server was created to handle API requests and responses from OpenAI.
2. **Frontend Development**: A React frontend was built to provide a graphical user interface where children can easily ask questions and see answers.

## License

This project is licensed under the MIT License.
