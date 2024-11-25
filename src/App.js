import React, { useState } from 'react';
// change this import to test different component
import Demo from './Demo/AssistantMenuDemo';
import LoginPage from './components/LoginPage';
import AssistantMenu from './components/AssistantMenu';
import AssistantConfiguration from './components/AssistantConfiguration';
import ChatInterface from './components/ChatInterface';
import Sidebar from './components/Sidebar';


function App() {
  return <Demo />;
}

export default App;


/*
const App = () => {
  const [page, setPage] = useState('login'); // login, menu, config, chat
  const [assistants, setAssistants] = useState([]);
  const [currentAssistant, setCurrentAssistant] = useState(null);

  const handleLogin = (type) => {
    if (type === 'existing') {
      setPage('menu');
    } else {
      setPage('config');
    }
  };

  const handleSelectAssistant = (assistant) => {
    setCurrentAssistant(assistant);
    setPage('chat');
  };

  const handleCreateAssistant = (name) => {
    const newAssistant = { name };
    setAssistants([...assistants, newAssistant]);
    setCurrentAssistant(newAssistant);
    setPage('config');
  };

  const handleConfirmConfig = (config) => {
    setCurrentAssistant(config);
    setPage('chat');
  };

  return (
    <div className="app">
      {page !== 'login' && (
        <Sidebar
          assistants={assistants}
          onSelect={handleSelectAssistant}
          onCreateNew={() => setPage('config')}
        />
      )}
      <div className="main">
        {page === 'login' && <LoginPage onLogin={handleLogin} />}
        {page === 'menu' && (
          <AssistantMenu
            assistants={assistants}
            onSelect={handleSelectAssistant}
            onCreate={handleCreateAssistant}
          />
        )}
        {page === 'config' && (
          <AssistantConfiguration
            assistant={currentAssistant}
            onConfirm={handleConfirmConfig}
          />
        )}
        {page === 'chat' && currentAssistant && (
          <ChatInterface assistant={currentAssistant} />
        )}
      </div>
    </div>
  );
};

export default App;
*/