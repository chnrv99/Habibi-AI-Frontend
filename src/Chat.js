// create a chat page usinig tailwindcss, where we can 
// send chat messages to the server and receieve responses
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Chat() {
  let messagesArray = [];
  const [messages, setMessages] = useState([]);
  const [userMessages, setUserMessages] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      window.location.href = '/';
    }

  }, []);

  const handleSendMessage = () => {
    const token = localStorage.getItem('token');

    // Add user's message to state
    setMessages(prevMessages => [...prevMessages, message]);

    axios.post('http://localhost:3000/chat', {
      query: message
    }, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then((res) => {
      // Add AI's message to state
      setMessages(prevMessages => [...prevMessages, res.data.message]);
    }).catch((err) => {
      console.log(err);
    });
  }

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='flex flex-col items-center justify-center w-1/2'>
        <input type='text' placeholder='Type your message here' onChange={(e) => setMessage(e.target.value)} className='w-full p-2 border border-gray-300 rounded-md mb-2' />
        <button onClick={handleSendMessage} className='bg-blue-500 text-white p-2 rounded-md'>Send</button>
        {/* display messages */}

        <div className='flex flex-col items-center justify-center w-full mt-4'>

          {/* {messagesArray} */}

          {
            [...messages, ...userMessages].map((msg, index) => (
              <div key={index} className={index % 2 === 0 ? 'bg-gray-200 p-2 rounded-md w-full mb-2' : 'bg-blue-200 p-2 rounded-md w-full mb-2'}>
                {index % 2 === 0 ? 'You: ' + msg : 'AI: ' + msg}
              </div>
            ))
          }
        </div>
      </div>
    </div>

  )
}

export default Chat;