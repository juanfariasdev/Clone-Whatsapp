import React, { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';
import './ChatWindow.css';


import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';

export default() => {
    const [emojiOpen, setEmojiOpen] = useState(false);
    const [text, setText] = useState('');
    const handleOpenEmoji = () =>{
        setEmojiOpen(true);
    }
    const handleCloseEmoji = () =>{
        setEmojiOpen(false);
    }
    const handEmojiClick = (e, emojiObject) => {
        setText( text + emojiObject.emoji);
    }

    return(
        <div className="chatWindow">
            <div className="chatWindow--header">
                <div className="chatWindow--headerinfo">
                    <img className="chatWindow--avatar" src="https://image.freepik.com/vetores-gratis/avatar-de-personagem-de-empresario-isolado_24877-60111.jpg" alt=""/>
                    <div className="chatWindow--name">Juan Pablo Farias</div>
                </div>
            <div className="chatWindow--headerbuttons">
                <div className="chatWindow--btn">
                    <SearchIcon style= {{ color: '#919191' }} />
                </div>
                <div className="chatWindow--btn">
                    <AttachFileIcon style= {{ color: '#919191' }}/>
                </div>
                <div className="chatWindow--btn">
                    <MoreVertIcon style= {{ color: '#919191' }} />
                </div>         
            </div>
            </div>
            <div className="chatWindow--body">

            </div>
            <div className="chatWindow--emojiarea" style={{height: emojiOpen ? '330px' :'0px'}}>
                <EmojiPicker 
                    onEmojiClick={handEmojiClick}
                    disableSkinTonePicker
                    groupNames={{
                        smileys_people: 'Smileys e pessoas',
                        animals_nature: 'Animais e natureza',
                        food_drink: 'Comidas e bebidas',
                        travel_places: 'Viagens e lugares',
                        activities: 'Atividades',
                        objects: 'Objetos',
                        symbols: 'Símbolos',
                        flags: 'Bandeiras',
                        recently_used: 'Recentes',
                      }}
                />
            </div>
            <div className="chatWindow--footer">
                <div className="chatWindow--pre">
                    <div className="chatWindow--btn"
                        onClick={handleCloseEmoji}
                        style={{ width: emojiOpen?40:0 }}
                    >
                        <CloseIcon style= {{ color: '#919191' }} />
                    </div>
                    <div className="chatWindow--btn"
                        onClick={handleOpenEmoji}
                    >
                        <InsertEmoticonIcon style= {{ color: emojiOpen?'#b22222':'#919191' }} />
                    </div>
                </div>
                <div className="chatWindow--inputarea">
                    <input 
                    className="chatWindow--input" 
                    type="text" 
                    placeholder="Digite uma mensagem"
                    value={text}
                    onChange={e=>setText(e.target.value)}
                    />
                </div>
                <div className="chatWindow--pos">

                    {text === '' &&
                    <div className="chatWindow--btn">
                        <MicIcon style= {{ color: '#919191' }} />
                    </div>
                    }
                    {text !== '' &&
                    <div className="chatWindow--btn">
                        <SendIcon style= {{ color: '#919191' }} />
                    </div>
                    }
                </div>
            </div>
        </div>
    );

}