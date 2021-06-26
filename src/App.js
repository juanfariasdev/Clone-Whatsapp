import React, { useState, useEffect } from 'react';
import "./App.css";
import ChatListitem from './components/ChatListItem';
import ChatIntro from './components/ChatIntro';
import ChatWindow from './components/ChatWindow';
import NewChat from './components/NewChat';
import Login from './components/Login';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import Api from './Api';

export default () => {

  const[chatlist, setChatlist] = useState([
    {chatId: 1, title: 'Juan Pablo Farias', image: 'https://image.freepik.com/vetores-gratis/avatar-de-personagem-de-empresario-isolado_24877-60111.jpg'},
    {chatId: 2, title: 'Juan Pablo Araujo Farias', image: 'https://image.freepik.com/vetores-gratis/avatar-de-personagem-de-empresario-isolado_24877-60111.jpg'},
    {chatId: 3, title: 'Juan Pablo', image: 'https://image.freepik.com/vetores-gratis/avatar-de-personagem-de-empresario-isolado_24877-60111.jpg'},
    {chatId: 4, title: 'Juan Farias', image: 'https://image.freepik.com/vetores-gratis/avatar-de-personagem-de-empresario-isolado_24877-60111.jpg'},
  ]);
  const [user, setUser] = useState(null);
  const [activeChat, setActiveChat] = useState({});
  const [showNewChat, setshowNewChat] = useState(false);
  
  const handleNewChat = () => {
    setshowNewChat(true);
  }

  const handleLoginData = async (u) => {
    console.log(u);
    let newUser = {
      id: u.uid,
      name: u.displayName,
      avatar: u.photoURL
    };
    console.log(newUser);
    await Api.addUser(newUser);
    //
    setUser(newUser);
  }

  if(user === null) {
    return (<Login onReceive={handleLoginData}/>)
  }

  return(
    <div className="app-window">
      <div className="sidebar">
        <NewChat 
          chatlist = {chatlist}
          user = {user}
          show = {showNewChat}
          setShow = {setshowNewChat}
        />
        <header>
          <img className="header--avatar" src={user.avatar} alt=""/>
          <div className="header--buttons">
            <div className="header--btn">
              <DonutLargeIcon style={{color: '#919191'}}/>
            </div>
            <div 
            onClick = {handleNewChat}
            className="header--btn">
              <ChatIcon style={{color: '#919191'}}/>
            </div>
            <div className="header--btn">
              <MoreVertIcon style={{color: '#919191'}}/>
            </div>
          </div>
        </header>
        <div className="search">
          <div className="search--input">
            <SearchIcon fontSize="small" style={{color: '#919191'}} />
            <input type="search" placeholder="Procurar ou começar uma nova conversa" />
          </div>
        </div>
        <div className="chatList">
          {chatlist.map((item, key) => (
            <ChatListitem 
              key={key}
              data={item}
              active={activeChat.chatId === chatlist[key].chatId}
              onClick={()=> setActiveChat(chatlist[key])}
            />
          ))}
        </div>
      </div>
      <div className="contentarea">
        {activeChat.chatId !== undefined && 
          <ChatWindow 
            user = {user}
          />
        }
        {activeChat.chatId === undefined &&
        <ChatIntro />
        }
      </div>
    </div>
  );

}