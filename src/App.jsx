
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChatbotHeader from './components/ChatbotHeader';
import ChatbotBody from './components/ChatbotBody';
import ChatbotInput from './components/ChatbotInput';
import Sidebar from './components/Sidebar';

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [messages, setMessages] = useState([]);
  const [chats, setChats] = useState([]);
  const [currentChatIndex, setCurrentChatIndex] = useState(0);
  const [showChatbotBody, setShowChatbotBody] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSend = (message) => {
    const newMessage = { sender: 'user', text: message, date: new Date() };
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);

  
    setTimeout(() => {
      const response = { sender: 'chatbot', text: message, date: new Date() };
      setMessages([...updatedMessages, response]);
    }, 1000);
  };

  const handleNewChat = () => {
    const newChat = { messages: [] };
    setShowWelcome(true);
    setChats([...chats, newChat]);
    setCurrentChatIndex(chats.length);
    setMessages([]);
    setShowChatbotBody(true);
  };

  const handleSelectChat = (index) => {
    setCurrentChatIndex(index);
    setMessages(chats[index].messages);
    setShowChatbotBody(true);
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
  };

  const handleDeleteChat = (index) => {
    const updatedChats = chats.filter((_, i) => i !== index);
    setChats(updatedChats);
    if (currentChatIndex === index) {
      setCurrentChatIndex(0);
      setMessages(updatedChats[0]?.messages || []);
    } else if (currentChatIndex > index) {
      setCurrentChatIndex(currentChatIndex - 1);
      setMessages(updatedChats[currentChatIndex - 1]?.messages || []);
    }
    if (updatedChats.length === 0) {
      setShowChatbotBody(false);
    }
  };

  const handleButtonClick = (buttonText) => {
    const newMessage = { sender: 'user', text: buttonText, date: new Date() };
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);

    setTimeout(() => {
      const response = { sender: 'chatbot', text: buttonText, date: new Date() };
      setMessages([...updatedMessages, response]);
    }, 1000);
  };

  const updateChatHistory = (messages) => {
    const updatedChats = [...chats];
    updatedChats[currentChatIndex] = { messages };
    setChats(updatedChats);
  };

  useEffect(() => {
    updateChatHistory(messages);
  }, [messages]);

  useEffect(() => {
    if (chats.length === 0) {
      handleNewChat();
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const ChatInterface = () => (
    <div className="flex h-screen bg-white">
      <Sidebar
        chats={chats}
        onSelectChat={handleSelectChat}
        onNewChat={handleNewChat}
        onDeleteChat={handleDeleteChat}
        isOpen={isSidebarOpen}
        onToggle={toggleSidebar}
      />
      <div className="flex-1 flex flex-col">
        <ChatbotHeader onNewChat={handleNewChat} onToggleSidebar={toggleSidebar} />
        <div className="flex-1 overflow-hidden">
          <div className="h-full flex flex-col justify-between">
            {showChatbotBody && (
              <div className="flex-1 overflow-y-auto p-4 sm:p-6">
                <ChatbotBody 
                  messages={messages} 
                  setShowWelcome={setShowWelcome} 
                  showWelcome={showWelcome} 
                  onButtonClick={handleButtonClick} 
                />
              </div>
            )}
            <div className="p-2 sm:p-4">
              <ChatbotInput 
                onSend={handleSend} 
                className="w-full py-2 px-4 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Type your message here..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Router basename="/pelcro-chatbot-assistant">
      <Routes>
        <Route path="/" element={<ChatInterface />} />
      </Routes>
    </Router>
  );
};

export default App;
