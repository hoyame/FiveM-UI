import React, { useState } from 'react';

import './Message.scss';

const Message = () => {
    const [contacts, setContacs] = useState([]);

    const MessageComponent = () => {
        return (
            <div className='list-component'>
                <img className="list-image" src="https://avatars.githubusercontent.com/u/56686012?v=4"></img>
                <div className="list-infos">
                    <p className="list-name">Hoyame</p>
                    <p className="list-content">I love youuuu forttt forttt forttt melciaaaa</p>
                </div>
            </div>
        );  
    }

    return (
        <section>
            <div className="box-t message">
                <div className='list-messages'>
                    <p className='title'>Messages</p>
                    <MessageComponent />
                </div>
            </div>
        </section>
    );
}

export default Message