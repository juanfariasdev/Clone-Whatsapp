import React from 'react';
import './Login.css';
import Api from '../Api';

export default ({onReceive}) => {
    const handleFacebookLogin = async () => {
        let result = await Api.fbPopup();
        
        if(result){
            let credential = result.credential;
            let token = credential.accessToken;
            const dados = result.user;
            onReceive(result.user);
        } else {
            alert("Erro!");
        }

    }

    return(
        <div className="login">
            <button onClick={handleFacebookLogin}> Logar com Facebook </button>
        </div>
    );
}