interface ChatWindowProps {
  messages: string[];
  friend: string;
}

export const ChatWindow: React.FC<ChatWindowProps> = ({ messages, friend }) => (
  <div>
    <h2>Chat with {friend}</h2>
    <div style={{ height: '200px', overflowY: 'auto', border: '1px solid #ccc' }}>
      {messages.map((msg, idx) => (
        <p key={idx}>{msg}</p>
      ))}
    </div>
  </div>
);