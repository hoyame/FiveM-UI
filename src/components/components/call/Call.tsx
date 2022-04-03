import React, { useEffect, useState } from 'react'
import { fetchNui, useNuiEvent } from '../../hooks';

import './Call.scss'

interface ICallIncoming {
    name: string;
    number?: string;
    id: number;

    refuse?: () => void;
    accept?: () => void;
}

export function CallIncoming(props: ICallIncoming) {
    const [timer, setTimer] = useState(false)
    const [display, setDisplay] = useState("flex")

    useEffect(() => {
      setTimeout(() => {
        setTimer(true)

        setTimeout(() => {
          setDisplay("none")
        }, 1100)

        setTimeout(() => {
            setDisplay("flex")
            setTimer(false)
        }, 10000)
      }, 15000)
    }, [])
    
    return (
        <div className={timer ? "fade-out box-t call" : "box-t call"} style={{display: display}}>
            <p>{props.name}</p>

            <div style={{display: "flex", flexDirection: "row"}}>
                <div className="call-refuse" onClick={() => {
                    fetchNui<any>('refuse-incomingcall', { id: props.id })
                    setTimer(true)

                    setTimeout(() => {
                      setDisplay("none")
                    }, 1100)
            
                    setTimeout(() => {
                        setDisplay("flex")
                        setTimer(false)
                    }, 10000)
                }}>
                    <svg className="call-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90.859 33.817">
                    <g transform="translate(-6.854 51.611)">
                        <path d="M52.295-51.611c-16.943,0-32.666,3.516-40.43,11.279a16.21,16.21,0,0,0-4.98,12.891,11.412,11.412,0,0,0,3.027,7.666,6.142,6.142,0,0,0,5.42,1.9L29.59-20.312a8.413,8.413,0,0,0,4.834-2c1.27-1.269,1.563-3.125,1.563-5.517v-3.809a2.143,2.143,0,0,1,.635-1.465,2.558,2.558,0,0,1,1.465-.781A75.793,75.793,0,0,1,52.295-35.01c6.152,0,11.475.439,14.209,1.123a3.054,3.054,0,0,1,1.367.781,1.949,1.949,0,0,1,.635,1.465v3.809c0,2.392.342,4.248,1.611,5.517a8.246,8.246,0,0,0,4.785,2L89.111-17.92a6.3,6.3,0,0,0,5.615-1.9,10.812,10.812,0,0,0,2.979-7.617,16.946,16.946,0,0,0-5.273-12.891C84.619-48.145,69.189-51.611,52.295-51.611Z"/>
                    </g>
                    </svg>
                    
                </div>
                <div className="call-accept" onClick={() => {
                    fetchNui<any>('accept-incomingcall', { id: props.id })
                }}>
                    <svg className="call-icon" style={{height: "15px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92.382 92.48">
                    <path d="M36.621-12.842c14.4,14.453,31.934,25.586,46.24,25.586a21.312,21.312,0,0,0,16.5-7.227c2.637-2.93,4.248-6.3,4.248-9.668a8.152,8.152,0,0,0-3.515-6.885L85.107-21.68c-2.393-1.66-4.346-2.441-6.1-2.441-2.295,0-4.346,1.269-6.592,3.516L68.9-17.09a2.828,2.828,0,0,1-1.9.781,4.04,4.04,0,0,1-2-.586c-3.076-1.66-8.35-6.152-13.232-11.035S42.334-38.037,40.723-41.162a4.187,4.187,0,0,1-.537-2,2.735,2.735,0,0,1,.732-1.855l3.516-3.564c2.2-2.295,3.516-4.3,3.516-6.592,0-1.807-.781-3.76-2.441-6.1l-10.6-14.844a8.37,8.37,0,0,0-7.129-3.613,13.794,13.794,0,0,0-9.521,4.248,21.952,21.952,0,0,0-7.031,16.6C11.231-44.58,22.217-27.246,36.621-12.842Z" transform="translate(-11.231 79.736)"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}

interface IInCall {
    name: string;
    end?: () => void;
    id: number;
}

export function InCall(props: IInCall) {
    const [timer, setTimer] = useState(false)
    const [display, setDisplay] = useState("flex")

    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] =  useState(1);

    useEffect(()=>{
        let myInterval = setInterval(() => {
            setSeconds(seconds + 1);
            
            if (seconds === 60) {
                setMinutes(minutes + 1);
                setSeconds(0);
            } 
        }, 1000)

        return ()=> {
            clearInterval(myInterval);
        };
    }, [minutes, seconds]);

    useNuiEvent<any>('end-incall', (s: any) => {
        if (s.id == props.id) {
            endCall()
        }
    })

    const endCall = () => {
        setTimer(true)
    
        setTimeout(() => {
          setDisplay("none")
        }, 1100)
    
        setTimeout(() => {
            setDisplay("flex")
            setTimer(false)
            setMinutes(0)
            setSeconds(0)
        }, 10000)
    }

    return (
        <div className={timer ? "fade-out box-t call" : "box-t call"} style={{display: display}}>
            <div>
                <p>{props.name}</p>
                <p style={{fontSize: "11px", fontFamily: 'SF-Pro-Text-Regular', opacity: "0.6"}}>{minutes < 10 ? "0" + minutes : minutes}:{seconds < 10 ? "0" + seconds : seconds}</p>
            </div>

            <div style={{display: "flex", flexDirection: "row"}}>
                <div className="call-speaker">
                    <svg className="call-icon-b" width="30" height="25" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.666 18.3115C22.0527 18.5664 22.5713 18.4521 22.8525 18.0302C24.3994 15.7099 25.3311 12.8271 25.3311 9.66305C25.3311 6.4902 24.3818 3.61618 22.8525 1.28708C22.5713 0.856413 22.0527 0.750945 21.666 1.00583C21.2441 1.27829 21.1826 1.79684 21.4727 2.26266C22.8174 4.31051 23.6523 6.85055 23.6523 9.66305C23.6523 12.458 22.8174 15.0156 21.4727 17.0547C21.1826 17.5205 21.2441 18.039 21.666 18.3115ZM10.293 17.5381C10.9521 17.5381 11.4355 17.0459 11.4355 16.3955V2.97458C11.4355 2.3154 10.9521 1.78805 10.2754 1.78805C9.82715 1.78805 9.50195 1.97262 9.02734 2.43844L5.35352 5.87497C5.30078 5.9277 5.23047 5.95407 5.15137 5.95407H2.66406C1.36328 5.95407 0.660156 6.67477 0.660156 8.03708V11.3066C0.660156 12.6689 1.36328 13.3896 2.66406 13.3896H5.15137C5.23047 13.3896 5.29199 13.416 5.35352 13.4687L9.02734 16.9316C9.4668 17.3535 9.83594 17.5381 10.293 17.5381ZM18.1064 15.9297C18.5107 16.1757 19.0029 16.0879 19.2842 15.6748C20.4268 14.0576 21.0947 11.8867 21.0947 9.65427C21.0947 7.42184 20.4355 5.24216 19.2842 3.63376C19.0029 3.22067 18.5107 3.12399 18.1064 3.37887C17.6846 3.64255 17.623 4.16989 17.9395 4.63571C18.8711 6.0068 19.4072 7.79098 19.4072 9.65427C19.4072 11.5088 18.8623 13.2929 17.9395 14.6728C17.6318 15.1386 17.6846 15.6572 18.1064 15.9297ZM14.5645 13.5742C14.9424 13.8203 15.4346 13.7324 15.707 13.3457C16.4189 12.3965 16.8408 11.0517 16.8408 9.65427C16.8408 8.2568 16.4189 6.92087 15.707 5.96286C15.4346 5.57614 14.9424 5.48825 14.5645 5.74313C14.1338 6.02438 14.0547 6.54294 14.3975 7.0527C14.8809 7.74704 15.1533 8.67868 15.1533 9.65427C15.1533 10.6299 14.8809 11.5527 14.3975 12.2558C14.0547 12.7656 14.1338 13.2841 14.5645 13.5742Z" />
                    </svg>  
                </div>

                <div className="call-refuse" style={{marginRight: 0}} onClick={() => {
                    fetchNui<any>('end-call', { id: props.id })
                }}>
                    <svg className="call-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90.859 33.817">
                        <g transform="translate(-6.854 51.611)">
                        <path d="M52.295-51.611c-16.943,0-32.666,3.516-40.43,11.279a16.21,16.21,0,0,0-4.98,12.891,11.412,11.412,0,0,0,3.027,7.666,6.142,6.142,0,0,0,5.42,1.9L29.59-20.312a8.413,8.413,0,0,0,4.834-2c1.27-1.269,1.563-3.125,1.563-5.517v-3.809a2.143,2.143,0,0,1,.635-1.465,2.558,2.558,0,0,1,1.465-.781A75.793,75.793,0,0,1,52.295-35.01c6.152,0,11.475.439,14.209,1.123a3.054,3.054,0,0,1,1.367.781,1.949,1.949,0,0,1,.635,1.465v3.809c0,2.392.342,4.248,1.611,5.517a8.246,8.246,0,0,0,4.785,2L89.111-17.92a6.3,6.3,0,0,0,5.615-1.9,10.812,10.812,0,0,0,2.979-7.617,16.946,16.946,0,0,0-5.273-12.891C84.619-48.145,69.189-51.611,52.295-51.611Z"/>
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    );
}

interface ICall {
    type: string;
    data: any;
}

export function Call(props: ICall) {
    if (props.type == "incoming") {
        return ( <CallIncoming {...props.data} /> )
    } else if (props.type == "incall") {
        return ( <InCall {...props.data} /> )
    }

    return (
        <></>
    )
}