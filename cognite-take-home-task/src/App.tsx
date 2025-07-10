
// import './App.css'
import React, { useState } from 'react';
import { FriendList } from './components/FriendList';
import { ChatWindow } from './components/ChatWindow';
import { MessageInput } from './components/MessageInput';

const friends = ['Ameya', 'Bobby', 'Arnav'];
function App() {
  const [selectedFriend, setSelectedFriend] = useState(friends[0]);
  const [messages, setMessages] = useState<Record<string, string[]>>({
    Ameya: [],
    Bobby: [],
    Arnav: [],
  });

  const sendMessage = (msg: string) => {
    setMessages((prev) => ({
      ...prev,
      [selectedFriend]: [...prev[selectedFriend], `You: ${msg}`],
    }));
  };

  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <div>
        <h3>Friends</h3>
        <FriendList friends={friends} selected={selectedFriend} onSelect={setSelectedFriend} />
      </div>
      <div style={{ flex: 1 }}>
        <ChatWindow messages={messages[selectedFriend]} friend={selectedFriend} />
        <MessageInput onSend={sendMessage} />
      </div>
    </div>
  );
}

export default App;

