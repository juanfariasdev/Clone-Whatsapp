import React, { useState, useEffect } from 'react';
import "./App.css";
import ChatListitem from './components/ChatListItem';
import ChatIntro from './components/ChatIntro';
import ChatWindow from './components/ChatWindow';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

export default () => {

  const[chatlist, setChatlist] = useState([
    {chatId: 1, title: 'Juan Pablo Farias', image: 'https://image.freepik.com/vetores-gratis/avatar-de-personagem-de-empresario-isolado_24877-60111.jpg'},
    {chatId: 2, title: 'Juan Pablo Araujo Farias', image: 'https://image.freepik.com/vetores-gratis/avatar-de-personagem-de-empresario-isolado_24877-60111.jpg'},
    {chatId: 3, title: 'Juan Pablo', image: 'https://image.freepik.com/vetores-gratis/avatar-de-personagem-de-empresario-isolado_24877-60111.jpg'},
    {chatId: 4, title: 'Juan Farias', image: 'https://image.freepik.com/vetores-gratis/avatar-de-personagem-de-empresario-isolado_24877-60111.jpg'},
  ]);
  const [activeChat, setActiveChat] = useState({});
  return(
    <div className="app-window">
      <div className="sidebar">
        <header>
          <img className="header--avatar" src="https://image.freepik.com/vetores-gratis/avatar-de-personagem-de-empresario-isolado_24877-60111.jpg" alt=""/>
          <div className="header--buttons">
            <div className="header--btn">
              <DonutLargeIcon style={{color: '#919191'}}/>
            </div>
            <div className="header--btn">
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
          <ChatWindow />
        }
        {activeChat.chatId === undefined &&
        <ChatIntro />
        }
      </div>
    </div>
  );

}