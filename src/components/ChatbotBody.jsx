
import React, { useEffect, useRef, useState } from 'react';
import Message from './Message';

const ChatbotBody = ({ messages, onButtonClick, setShowWelcome, showWelcome }) => {
  const messagesEndRef = useRef(null);
  const [structuredQuestion, setStructuredQuestion] = useState('');

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(messages));
    if (messages.length > 0) {
      setShowWelcome(false);
    }
    scrollToBottom();
  }, [messages, setShowWelcome]);

  const examples = [
    { text: "Manage subscriptions", icon: "M12 6v6m0 0v6m0-6h6m-6 0H6" },
    { text: "Authentication methods", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
    { text: "Secure payments", icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" },
    { text: "Premium content access", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" }
  ];

  const handleButtonClick = (text) => {
    setStructuredQuestion(`Could you please provide detailed information about ${text.toLowerCase()}? Specifically, I'm interested in:
1. How it works
2. Key features
3. Benefits for users
4. Any potential challenges or considerations`);
    onButtonClick(text);
  };

  return (
    <div className="flex-1 overflow-hidden bg-white">
      <div className="h-full overflow-y-auto px-4 sm:px-6 md:px-8 lg:px-10">
        {showWelcome ? (
          <div className="flex flex-col items-center justify-center h-full space-y-5 py-5">
            <img src="https://www.drupal.org/files/Pelcro%20icon-01.png" alt="Pelcro Logo" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-2 sm:mb-3 md:mb-4" />
            <div className="mx-3 mt-12 flex max-w-3xl flex-wrap items-stretch justify-center gap-4">
              {examples.map((example, index) => (
                <button
                  key={index}
                  onClick={() => handleButtonClick(example.text)}
                  className="bg-white hover:bg-gray-50 rounded-2xl p-2 sm:p-3 text-xs sm:text-sm text-gray-700 flex flex-col items-start justify-center shadow-md border border-[#35b6A9] w-[160px] h-[123.1px] relative overflow-hidden"
                >
                  <div className="absolute top-2 left-2">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d={example.icon} />
                    </svg>
                  </div>
                  <span className="text-left text-xs sm:text-sm md:text-base leading-tight mt-8 ml-2 text-gray-700">{example.text}</span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-10 sm:space-y-12 md:space-y-16 py-10 sm:py-12 md:py-16">
            {messages.map((msg, index) => (
              <Message key={index} message={msg} />
            ))}
            {structuredQuestion && (
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-sm text-gray-700">{structuredQuestion}</p>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatbotBody;
