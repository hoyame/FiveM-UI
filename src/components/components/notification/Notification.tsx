import React, { useEffect, useState } from 'react'

import './Notification.scss';


export interface INotification {
    key?: number;
    title?: string;
    subtitle?: string;
    message?: string;
    large?: boolean;
}

export function Notification(props: INotification) {
    const [timer, setTimer] = useState(false)
    const [display, setDisplay] = useState("flex")

    useEffect(() => {
      setTimeout(() => {
        setTimer(true)

        setTimeout(() => {
          setDisplay("none")
        }, 1100)
      }, 8000)
    }, [])

    const s = props.large && '450px' || '300px';
    return (
        <div className={timer ? "fade-out box-t notif" : "box-t notif"} style={{width: s, display: display}}>
            <div className="notif-title">
              <svg style={{marginTop: "-2.5px"}} width="14" height="14" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.9248 15.5781H5.5459C5.60742 17.248 6.97852 18.7949 9 18.7949C11.0127 18.7949 12.3926 17.2568 12.4629 15.5781H16.0752C16.9893 15.5781 17.5518 15.0771 17.5518 14.3213C17.5518 13.3809 16.6992 12.5811 15.8994 11.8164C15.2842 11.21 15.1436 10.0146 15.0205 8.81934C15.0117 8.32715 14.9766 7.86133 14.9238 7.41309C14.3965 7.63281 13.7373 7.7207 13.1748 7.6416C13.2188 8.0459 13.2539 8.47656 13.2627 8.97754C13.3506 10.6475 13.6406 11.9307 14.2383 12.625C14.6689 13.1172 15.1611 13.583 15.3896 13.8379V13.9434H2.59277V13.8379C2.82129 13.583 3.33105 13.1172 3.76172 12.625C4.36816 11.9307 4.64941 10.6475 4.7373 8.97754C4.84277 5.45312 5.92383 4.25781 7.33887 3.88867C7.55859 3.82715 7.67285 3.72168 7.69043 3.48438C7.74316 2.59668 8.23535 1.99902 9 1.99902C9.14941 1.99902 9.28125 2.0166 9.4043 2.06055C9.5625 1.52441 9.84375 1.04102 10.2129 0.636719C9.85254 0.452148 9.44824 0.34668 9 0.34668C7.69043 0.34668 6.71484 1.23438 6.38086 2.40332C4.08691 3.22949 3.12012 5.44434 2.98828 8.75781C2.87402 9.99707 2.72461 11.21 2.10059 11.8164C1.30078 12.5811 0.448242 13.3809 0.448242 14.3213C0.448242 15.0771 1.01074 15.5781 1.9248 15.5781ZM13.3945 6.49902C15.0469 6.49902 16.4268 5.12793 16.4268 3.4668C16.4268 1.80566 15.0469 0.43457 13.3945 0.43457C11.7334 0.43457 10.3623 1.80566 10.3623 3.4668C10.3623 5.12793 11.7334 6.49902 13.3945 6.49902ZM9 17.3799C8.00684 17.3799 7.29492 16.668 7.2334 15.5781H10.7754C10.7227 16.6592 10.002 17.3799 9 17.3799Z" fill="#fff"/>
              </svg>
  
              <div className="notif-component">
                <p className="notif-title-text">{props.title}</p>
                <p className="notif-title-text" style={{opacity: 0.80}}>{props.subtitle}</p>
              </div>
            </div>
  
            <div className="notif-content">{props.message}</div>
        </div>     
    )
}
