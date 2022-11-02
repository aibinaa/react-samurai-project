import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const posts = [
  { id: 1, post: 'Hey, its my 1 post', likesCount: 12 },
  { id: 2, post: 'Hey, its my 2 post', likesCount: 10 },
  { id: 3, post: 'Hey, its my 3 post', likesCount: 20 },
  { id: 4, post: 'Hey, its my 4 post', likesCount: 11 },
  { id: 5, post: 'Hey, its my 5 post', likesCount: 15 }
]

let DialogsData = [
  { id: 1, name: "Dima" },
  { id: 2, name: "Leha" },
  { id: 3, name: "Alena" },
  { id: 4, name: "Lena" },
  { id: 5, name: "Kira" }
]

let MessagesData = [
  { id: 1, message: 'Hi', likesCount: 9 },
  { id: 2, message: 'Hey Hey', likesCount: 8 },
  { id: 3, message: 'How are u', likesCount: 3 },
  { id: 4, message: 'Ok', likesCount: 1 },
  { id: 5, message: 'U?', likesCount: 5 },
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <App posts={posts} dialogs={DialogsData} messages={MessagesData}/>

  </React.StrictMode>
);

reportWebVitals();
