import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { generateGeminiContent } from '../gemeniService';

const Message = ({ message }) => {
  const isUser = message.sender === 'user';
  const [aiResponse, setAiResponse] = useState('');
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  useEffect(() => {
    if (!isUser) {
      generateGeminiContent(message.text)
        .then(response => {
          const generatedText = response.candidates[0].content.parts[0].text;
          const formattedText = formatAIResponse(generatedText);
          setAiResponse(formattedText);
        })
        .catch(error => {
          console.error('Error generating AI response:', error);
          setAiResponse('Sorry, I encountered an error while processing your request.');
        });
    }
  }, [isUser, message.text]);

  const formatAIResponse = (text) => {
    const lines = text.split('\n');
    let formattedLines = [];
    let isFirstLine = true;

    lines.forEach(line => {
      line = line.trim().replace(/[*#]/g, '');
      if (line !== '') {
        if (isFirstLine) {
          formattedLines.push(`<p class="font-semibold mb-2">${line}</p>`);
          isFirstLine = false;
        } else {
          formattedLines.push(`<p class="mb-2">${line}</p>`);
        }
      }
    });

    return formattedLines.join('');
  };

  const handleLike = () => {
    setLiked(!liked);
    setDisliked(false);
  };

  const handleDislike = () => {
    setDisliked(!disliked);
    setLiked(false);
  };

  return (
    <div className="flex justify-center w-full max-w-2xl mx-auto">
      <div className={`${isUser ? 'ml-auto' : 'mr-auto'} max-w-[90%]`}>
        <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} space-x-1`}>
          {!isUser && (
            <div className="flex-shrink-0">
              <div className="w-6 h-6 rounded-full flex items-center justify-center">
                <img src="https://www.drupal.org/files/Pelcro%20icon-01.png" alt="Pelcro Logo" className="w-full h-full" />
              </div>
            </div>
          )}
          <div className={`overflow-hidden ${isUser ? 'bg-gray-100 text-gray-800 rounded-full' : 'bg-white rounded-lg'} py-3 px-4`}>
            {isUser ? (
              <p className="text-base">{message.text}</p>
            ) : (
              <div className="text-sm prose" dangerouslySetInnerHTML={{ __html: aiResponse || '<p class="text-gray-500">Thinking...</p>' }} />
            )}
          </div>
        </div>
        <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mt-1`}>
          <p className={`text-xs text-gray-500 ${isUser ? 'text-right' : 'ml-7'}`}>
            {dayjs(message.date).format('h:mm A')}
          </p>
          {!isUser && (
            <div className="flex ml-2">
              <button
                onClick={handleLike}
                className={`mr-2 focus:outline-none ${liked ? 'text-[#35b6A9]' : 'text-gray-400'}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                </svg>
              </button>
              <button
                onClick={handleDislike}
                className={`focus:outline-none ${disliked ? 'text-red-500' : 'text-gray-400'}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Message;
