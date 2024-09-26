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

- Real-time AI-Powered Chat:
  - Interact with the Gemini AI model for instant responses.
  - Error handling for AI response generation.
- Multiple Chat Sessions:
  - Manage multiple chat sessions simultaneously.
  - Create, delete, and save chat histories dynamically.
- Sidebar Navigation:
  - Easy navigation between chats via a sidebar.
  - Group chats by date for better organization.
  - Toggle the sidebar on mobile for optimized use.
- Responsive Design:
  - Mobile-friendly, fully responsive UI built with Tailwind CSS.
  - Optimized for various screen sizes.
- Welcome Screen with Predefined Starters:
  - Display conversation starters and a welcome screen on the first load.
  - Automatic chat creation when first opening the application.
- Custom Message Formatting:
  - Styled message inputs with options for text formatting.
  - Interactive message review system with like/dislike buttons.
- Routing and Navigation:
  - Single-page application with React Router for smooth transitions between sections.

## Technologies Used

- React.js
- Gemini AI API
- React Router
- Axios for API requests
- Tailwind CSS for styling
- Day.js for date formatting
- React Icons for UI icons
- GitHub Pages for deployment
- useEffect and useState hooks for state management
- Custom hooks for side effects and state logic
- Responsive design techniques
- Various state management techniques

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
