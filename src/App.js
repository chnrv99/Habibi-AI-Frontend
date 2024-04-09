import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Chat from './Chat';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<div className="App">
          <header className="App-header">
            <Login />

            {/* <Link to="/chat">Chat</Link> */}
          </header>
        </div>} />
        
        <Route path="chat" element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default App;
