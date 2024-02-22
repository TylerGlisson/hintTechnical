import logo from './logo.svg';
import './App.css';
import EmojiPicker from 'emoji-picker-react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <EmojiPicker onEmojiClick={onEmoji} />
        <p>Hint Emoji Picker Demo</p>
      </header>
    </div>
  );
}

function onEmoji(emojiObj) {
  console.log('Emoji Object:', emojiObj);
}

export default App;
