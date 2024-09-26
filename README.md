# Pelcro AI Chat Application

This project is a React-based AI chat application that uses the Gemini AI model to generate responses. It provides a user-friendly interface for chatting with an AI assistant.

## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Prerequisites](#prerequisites)
4. [Installation](#installation)
5. [Running the Application](#running-the-application)
6. [Project Structure](#project-structure)
7. [Components](#components)
8. [Additional Scripts](#additional-scripts)

## Features

- Real-time chat interface with AI-powered responses using Gemini AI
- Multiple chat sessions management
- Sidebar for easy navigation between chats
- Responsive design for various screen sizes
- Welcome screen with predefined conversation starters
- Dynamic chat history saving and loading
- New chat creation and deletion functionality
- Custom styling with Tailwind CSS
- Routing with React Router for single-page application experience
- Message formatting and styling
- Error handling for AI response generation
- Mobile-friendly sidebar toggle
- Chat grouping by date
- Automatic chat creation on first load
- Response review option with like/dislike functionality

## Technologies Used

- React.js
- Gemini AI API
- React Router
- Axios for API requests
- Tailwind CSS for styling
- Day.js for date formatting
- React Icons for UI icons
- Jest and React Testing Library for testing
- GitHub Pages for deployment
- useEffect and useState hooks for state management
- Custom hooks for side effects and state logic
- SVG icons for UI elements
- Responsive design techniques
- ES6+ JavaScript features

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/MohamedYasser9/pelcro-chatbot-assistant
   ```

2. Navigate to the project directory:
   ```
   cd pelcro-chatbot-assistant
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Install additional dependencies:
   ```
   npm install axios dayjs react-icons react-router-dom tailwindcss
   ```

5. Set up Tailwind CSS:
   ```
   npx tailwindcss init
   ```

6. Create a `.env` file in the root directory and add your Gemini AI API key:
   ```
   REACT_APP_GEMINI_API_KEY=your_api_key_here
   ```

## Running the Application

To start the development server:
