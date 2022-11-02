import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App(props) {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile' element={<Profile posts={props.state.ProfilePage.PostsData}/>} />
            <Route path='/dialogs' element={<Dialogs dialogs={props.state.DialogsPage.DialogsData} messages={props.state.DialogsPage.MessagesData}/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
