import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';

const Sidebar = ({ chats, onSelectChat, onNewChat, onDeleteChat }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setIsOpen(false);
      }
    };
//
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const groupChatsByDate = (chats) => {
    const grouped = {};
    chats.forEach((chat, index) => {
      const date = dayjs(chat.messages[0]?.date).format('MMMM D, YYYY');
      if (!grouped[date]) {
        grouped[date] = [];
      }
      grouped[date].push({ ...chat, index });
    });
    return grouped;
  };

  const groupedChats = groupChatsByDate(chats);

  return (
    <>
      {(!isOpen || isMobile) && (
        <div className="fixed top-14 left-3 z-50 flex flex-col space-y-2">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-md bg-white shadow-md hover:bg-gray-100 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-400"
            title="Open sidebar"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <line x1="9" y1="3" x2="9" y2="21" />
            </svg>
          </button>
          <button
            onClick={onNewChat}
            className="p-2 rounded-md bg-white shadow-md hover:bg-gray-100 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-400"
            title="New chat"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>
        </div>
      )}
      {isOpen && (
        <div className={`${isMobile ? 'fixed inset-0 z-50' : 'relative'} w-full md:w-64 bg-gray-50 text-gray-800 p-2 flex flex-col h-screen border-r border-gray-200 font-sans transition-all duration-300 ease-in-out`}>
          <div className="flex justify-between items-center mb-2">
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-md bg-transparent hover:bg-gray-200 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-400"
              title="Close sidebar"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <line x1="9" y1="3" x2="9" y2="21" />
              </svg>
            </button>
            <button
              onClick={onNewChat}
              className="p-2 rounded-md bg-transparent hover:bg-gray-200 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-400"
              title="New chat"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>
          </div>
          <button
            onClick={onNewChat}
            className="flex items-center space-x-2 mb-4 p-2 rounded-md hover:bg-gray-200 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            <img src="https://www.drupal.org/files/Pelcro%20icon-01.png" alt="Pelcro Logo" className="w-4 h-4" />
            <span className="text-xs sm:text-sm md:text-base text-gray-700">Pelcro</span>
          </button>
          <div className="flex-1 overflow-y-auto space-y-1 border-b border-gray-300 pb-2">
            {Object.entries(groupedChats).map(([date, dateChats]) => (
              <div key={date} className="mb-4">
                <div className="text-xs font-semibold text-gray-500 mb-2">{date}</div>
                {dateChats.map((chat) => (
                  <div
                    key={chat.index}
                    className="py-2 cursor-pointer flex items-center justify-between rounded-md transition-all duration-200 hover:shadow-[0_0_10px_rgba(53,182,169,0.3)] group"
                    onClick={() => {
                      onSelectChat(chat.index);
                      if (isMobile) setIsOpen(false);
                    }}
                  >
                    <span className="text-xs sm:text-sm md:text-base text-gray-700 truncate flex-grow">
                      {chat.messages[0]?.text || 'New chat'}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onDeleteChat(chat.index);
                      }}
                      className="text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <button className="mt-4 flex items-center space-x-2 mb-4 p-2 rounded-md hover:bg-gray-200 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
            </svg>
            <span className="text-xs sm:text-sm md:text-base text-gray-700">Log out</span>
          </button>
        </div>
      )}
    </>
  );
};

export default Sidebar;
