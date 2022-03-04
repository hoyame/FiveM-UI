import React, { useState } from 'react';

import './Message.scss';

const Message = () => {
    const [contacts, setContacs] = useState([]);

    interface IMessage {
        name: string;
        content: string;
        img?: string;
        hour: string;
        notif?: boolean;
    }

    const MessageComponent = (props: IMessage) => {
        return (
            <div className='list-component'>
                { props.notif && <div className='list-notif'></div>}
                <img className="list-image" src="https://avatars.githubusercontent.com/u/56686012?v=4"></img>
                <div className="list-infos">
                    <p className="list-name">{props.name}</p>
                    <p className="list-content">{props.content}</p>
                    <p className="list-hour">il y'a {props.hour}</p>
                </div>
            </div>
        );  
    }

    return (
        <section>
            <div className="box-t message">
                <div className='list-messages'>
                    <p className='title'>Messages</p>
                    <div className="message-scroll">
                        <MessageComponent name="Hoyame" content="iorghrhgoirbgr" hour="4 heure" notif={true} />
                        <MessageComponent name="flora" content="iorghrhgoirbgr" hour="4 heure" notif={true} />
                        <MessageComponent name="luca scilachier" content="iorghrhgoirbgr" hour="4 heure" notif={false} />
                        <MessageComponent name="romain ton pote la" content="iorghrhgoirbgr" hour="4 heure" notif={true} />
                        <MessageComponent name="arabiatch" content="iorghrhgoirbgr" hour="4 heure" notif={true} />
                        <MessageComponent name="amonaillettet" content="eohfeohigeg" hour="2 jour" />
                        <MessageComponent name="poulet au olives" content="iorghrhgoirbgr" hour="4 heure" notif={true} />
                        <MessageComponent name="info.gouv <covid>" content="iorghrhgoirbgr" hour="4 heure" notif={true} />
                        <MessageComponent name="hobbinou" content="iorghrhgoirbgr" hour="4 heure" notif={false} />
                        <MessageComponent name="christofleure" content="iorghrhgoirbgr" hour="4 heure" notif={true} />
                        <MessageComponent name="clairwi" content="iorghrhgoirbgr" hour="4 heure" notif={true} />
                        <MessageComponent name="negets de pouli" content="iorghrhgoirbgr" hour="4 heure" notif={true} />
                        <MessageComponent name="pour 75ptns un menu beste of offert" content="iorghrhgoirbgr" hour="4 heure" notif={true} />
                        <MessageComponent name="" content="iorghrhgoirbgr" hour="4 heure" notif={true} />
                    </div>
                </div>

                <div className="content-message">

                </div>
            </div>
        </section>
    );
}

export default Message

