import React from 'react';
import './MessageItem.css';

export default ({data, user}) => {
    return(
        <div className="menssageLine"
        style={{
            justifyContent: user.id === data.author ? 'flex-end' : 'flex-start'
        }}
        >
            <div 
            className="menssageItem"
            style={{
                backgroundColor: user.id === data.author ? '#dcf8c6' : '#fff'
            }}
            >
                {data.body !== '' &&
                <div className="menssageText">{data.body}</div>
                }
                {data.body === '' &&
                <div className="menssageImage">{data.body}</div>
                }
                <div className="menssageDate">06:42</div>
            </div>
        </div>
    );
}