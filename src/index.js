import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import state, { subsribe } from './redux/state';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { addPost, updateNewPostText } from './redux/state';
 
const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} 
        addPost={addPost} 
        updateNewPostText={updateNewPostText} />
      </BrowserRouter>
    </React.StrictMode>
  );
}
reportWebVitals();
rerenderEntireTree(state)
subsribe(rerenderEntireTree)
