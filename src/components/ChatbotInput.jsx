import React, { useState } from 'react';

const ChatbotInput = ({ onSend }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="w-full px-8 sm:px-12 md:px-16 lg:px-20 py-2 sm:py-3 md:py-4 bg-transparent">
      <form className="flex items-center w-full max-w-4xl mx-auto">
        <div className="relative flex-grow">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            className="w-full px-6 py-3 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-[#35b6A9] pr-12 shadow-md"
            placeholder="Message Pelcro AI..."
          />
          <button
            onClick={handleSend}
            disabled={!message.trim()}
            className="absolute right-1 sm:right-1.5 md:right-2 top-1/2 transform -translate-y-1/2 p-1 sm:p-1.5 md:p-2 text-white bg-[#35b6A9] rounded-full hover:bg-[#2a9186] focus:outline-none focus:ring-2 focus:ring-[#35b6A9] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-5 sm:w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
          </button>
        </div>
      </form>
      <div className="text-center mt-2 text-xs text-gray-500">
        Powered by Gemini AI
      </div>
    </div>
  );
};

export default ChatbotInput;
