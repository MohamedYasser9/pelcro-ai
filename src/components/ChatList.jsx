import React, { useContext } from 'react';
import { ChatContext } from '../context/ChatContextProvider.jsx';

const ChatList = () => {
  const { chats, switchChat, currentChatId } = useContext(ChatContext);

  return (
    <nav className="space-y-1 px-3 py-2">
      {chats.map(({ id, title }) => (
        <button
          key={id}
          onClick={() => switchChat(id)}
          className={`w-full flex items-center px-3 py-3 text-sm transition-colors duration-200 ${
            currentChatId === id
              ? 'bg-gray-800 text-white'
              : 'text-gray-300 hover:bg-gray-700 hover:text-white'
          } rounded-md`}
        >
          <svg
            className="mr-3 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20 12H4"
            />
          </svg>
          <span className="truncate">{title || `Chat ${id}`}</span>
        </button>
      ))}
    </nav>
  );
};

export default ChatList;
