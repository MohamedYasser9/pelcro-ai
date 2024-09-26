import React from 'react';

const ChatbotHeader = ({ onNewChat, isSidebarOpen }) => {
  return (
    <header className="bg-white p-2 sm:p-3 md:p-4 flex items-center justify-between">
      <div className="flex items-center">
        <span className="text-gray-400 text-base sm:text-lg md:text-xl font-medium">Pelcro AI</span>
      </div>
      <div className={`flex items-center space-x-1 sm:space-x-2 ${!isSidebarOpen ? 'ml-4 sm:ml-8 md:ml-24' : ''} transition-all duration-300`}>
        <button 
          onClick={onNewChat}
          className="text-gray-500 hover:text-gray-700 transition-colors duration-200 p-1 sm:p-2 rounded-full hover:bg-gray-100"
          title="New chat"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>
        <button 
          className="text-gray-500 hover:text-gray-700 transition-colors duration-200 p-1 sm:p-2 rounded-full hover:bg-gray-100"
          title="Settings"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default ChatbotHeader;
