import * as React from 'react';
import { Component, useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Call } from '../components/call/Call';
import Hud from '../components/hud/Hud';
import { INotification, Notification } from "../components/notification/Notification";

import './home.scss'
import Profile from '../apps/profile/Profile';
import Overlay from '../components/overlay/Overlay';
import Bank from '../apps/bank/Bank';
import Inventory from '../apps/inventory/Inventory';
import Notifications from '../apps/notifications/Notifications';
import { fetchNui, useNuiEvent } from '../hooks';


const Home = () => {
   const [notifications, setNotifications] = useState({ list: [] });
   const [inComingCall, setInComingCall] = useState({ name: "", id: 0  });
   const [inCall, setInCall] = useState({ name: "", id: 0 });
   const [data, setData] = useState({
      name: "",
      nickName: "",
      img: "",
      jobNameCase: "",
      job: "",
      gradeNameCase: "",
      grade: "",
      crewNameCase: "",
      crew: "",
      food: 0,
      water: 0
   })

   const [bankData, setBankData] = useState({
      id: 0,
      cash: 0,
      balance: 0,
      transactions: []
   })

   const [items, setItems] = useState({
      id: 0,
      items: [],
      proxItems: []
   })



   useEffect(() => {
      setInterval(() => {
         setInComingCall({ name: "", id: 0 });
         setInCall({ name: "", id: 0 });
      }, 10000)
   }, [])
 
   useNuiEvent<any>('bank-data', (s: any) => {
      setBankData({
         ...bankData, id: s.id, cash: s.cash, balance: s.balance, transactions: s.transactions
      })
   })

   useNuiEvent<any>('notification', (s: any) => {
      let c: any = s;
      let x: any = notifications.list;
      x.push(c);

      setNotifications({
         ...notifications.list, list: x
      })
   })

   useNuiEvent<any>('inventory-data', (s: any) => {
      let d: any = s;

      setItems({
         ...items, items: d.items, proxItems: d.proxItems, id: d.id
      })
   })

   useNuiEvent<any>('call-incoming', (s: any) => {
      setInComingCall({
         ...inComingCall, name: s.name, id: s.id
      })
   })

   useNuiEvent<any>('incall', (s: any) => {
      setInCall({
         ...inCall, name: s.name, id: s.id
      })
   })

   useNuiEvent<any>('profile-data', (s: any) => {
      setData({
         ...data, 
         name: s.name,
         nickName: s.nickName,
         img: s.img,
         jobNameCase: s.jobNameCase,
         job: s.job,
         gradeNameCase: s.gradeNameCase,
         grade: s.grade,
         crewNameCase: s.crewNameCase,
         crew: s.crew,
         food: s.food,
         water: s.water
      })
   })

   const [state, setState] = useState(false)

   const [apps, setApps] = useState({
      profile: false,
      inventory: true,
      bank: false,
      notif: false
   })

   const [oldApp, setOldApp] = useState("")

   const openApp = (arg: string) => {
      const old = oldApp;
      setOldApp(arg);

      switch (arg) {
         case "profile":
            setApps({ ...apps, profile: !apps.profile, inventory: false, bank: false, notif: false })
            break;
         case "inventory":
            setApps({ ...apps, profile: false, inventory: !apps.inventory, bank: false, notif: false })
            break;
         case "bank":
            setApps({ ...apps, profile: false, inventory: false, bank: !apps.bank, notif: false })
            break;
         case "notif":
            setApps({ ...apps, profile: false, inventory: false, bank: false, notif: !apps.notif })
            break;
      }

      useEffect(() => {
         fetchNui<any>('unblur');
      })

      // setApps({...apps, arg: !apps.profile})
   }

   return (
      <section>
         <div className="left-container">
            {
               state ? 
               <div className="box-t home-open">
                     <div style={{ display: 'flex', flexDirection: "row", alignItems: "center", width: "100%", paddingRight: "12.5px" }}>
                        <div className="home-c-icon" onClick={() => setState(false)}>
                           <svg className="home-icon-open" xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 20 20" fill="#ffffff">
                           <path d="M2.5 0.75H6.5C7.4665 0.75 8.25 1.5335 8.25 2.5V6.5C8.25 7.4665 7.4665 8.25 6.5 8.25H2.5C1.5335 8.25 0.75 7.4665 0.75 6.5V2.5C0.75 1.5335 1.5335 0.75 2.5 0.75ZM13.5 0.75H17.5C18.4665 0.75 19.25 1.5335 19.25 2.5V6.5C19.25 7.4665 18.4665 8.25 17.5 8.25H13.5C12.5335 8.25 11.75 7.4665 11.75 6.5V2.5C11.75 1.5335 12.5335 0.75 13.5 0.75ZM13.5 11.75H17.5C18.4665 11.75 19.25 12.5335 19.25 13.5V17.5C19.25 18.4665 18.4665 19.25 17.5 19.25H13.5C12.5335 19.25 11.75 18.4665 11.75 17.5V13.5C11.75 12.5335 12.5335 11.75 13.5 11.75ZM2.5 11.75H6.5C7.4665 11.75 8.25 12.5335 8.25 13.5V17.5C8.25 18.4665 7.4665 19.25 6.5 19.25H2.5C1.5335 19.25 0.75 18.4665 0.75 17.5V13.5C0.75 12.5335 1.5335 11.75 2.5 11.75Z" stroke-width="1.5"></path>
                           </svg>
                        </div>
            
                        <svg onClick={() => openApp("profile")} className="home-app-icon" width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M3.46777 16.8633H18.5234C20.4219 16.8633 21.4062 15.8877 21.4062 14.0156V3.31055C21.4062 1.43848 20.4219 0.462891 18.5234 0.462891H3.46777C1.56934 0.462891 0.584961 1.42969 0.584961 3.31055V14.0156C0.584961 15.8877 1.56934 16.8633 3.46777 16.8633ZM7.3877 8.66309C6.33301 8.66309 5.47168 7.7666 5.47168 6.57129C5.47168 5.4375 6.33301 4.50586 7.3877 4.50586C8.45996 4.50586 9.3125 5.4375 9.3125 6.57129C9.3125 7.7666 8.45996 8.67188 7.3877 8.66309ZM13.1533 5.79785C12.8193 5.79785 12.5732 5.54297 12.5732 5.21777C12.5732 4.91016 12.8193 4.66406 13.1533 4.66406H17.7676C18.0928 4.66406 18.3389 4.91016 18.3389 5.21777C18.3389 5.54297 18.0928 5.79785 17.7676 5.79785H13.1533ZM13.1533 9.23438C12.8193 9.23438 12.5732 8.97949 12.5732 8.66309C12.5732 8.34668 12.8193 8.10059 13.1533 8.10059H17.7676C18.0928 8.10059 18.3389 8.34668 18.3389 8.66309C18.3389 8.97949 18.0928 9.23438 17.7676 9.23438H13.1533ZM4.03906 12.7236C3.71387 12.7236 3.54688 12.4951 3.54688 12.2051C3.54688 11.3789 4.75977 9.26074 7.3877 9.26074C10.0244 9.26074 11.2461 11.3789 11.2461 12.2051C11.2461 12.4951 11.0791 12.7236 10.7539 12.7236H4.03906ZM13.1533 12.6709C12.8193 12.6709 12.5732 12.4248 12.5732 12.1172C12.5732 11.792 12.8193 11.5371 13.1533 11.5371H17.7676C18.0928 11.5371 18.3389 11.792 18.3389 12.1172C18.3389 12.4248 18.0928 12.6709 17.7676 12.6709H13.1533Z" />
                        </svg>
         
                        <svg onClick={() => openApp("inventory")} className="home-app-icon" width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M18.0576 18.2148V3.98535H18.541C20.4307 3.98535 21.3887 4.93457 21.3887 6.79785V15.4023C21.3887 17.2656 20.4307 18.2148 18.541 18.2148H18.0576ZM7.44922 3.15039V3.98535H14.5508V3.15039C14.5508 2.7373 14.2783 2.47363 13.8213 2.47363H8.17871C7.73047 2.47363 7.44922 2.7373 7.44922 3.15039ZM16.5459 3.98535V18.2148H5.4541V3.98535H5.67383V3.07129C5.67383 1.68262 6.57031 0.856445 8.06445 0.856445H13.9355C15.4297 0.856445 16.3262 1.68262 16.3262 3.07129V3.98535H16.5459ZM3.4502 18.2148C1.57812 18.2148 0.611328 17.2656 0.611328 15.4023V6.79785C0.611328 4.93457 1.57812 3.98535 3.4502 3.98535H3.94238V18.2148H3.4502Z" />
                        </svg>   
                     
                        <svg onClick={() => openApp("bank")} className="home-app-icon" width="18" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M18.5059 0.0517578H3.48535C1.58691 0.0517578 0.59375 1.03613 0.59375 2.91699V3.70801H21.3975V2.91699C21.3975 1.03613 20.4131 0.0517578 18.5059 0.0517578ZM4.26758 12.4707C3.74902 12.4707 3.39746 12.1279 3.39746 11.627V10.001C3.39746 9.50879 3.74902 9.15723 4.26758 9.15723H6.4209C6.93066 9.15723 7.28223 9.50879 7.28223 10.001V11.627C7.28223 12.1279 6.93066 12.4707 6.4209 12.4707H4.26758ZM3.48535 15.2832H18.5059C20.4131 15.2832 21.3975 14.29 21.3975 12.4092V5.77344H0.59375V12.4092C0.59375 14.2988 1.58691 15.2832 3.48535 15.2832Z" />
                        </svg>  
                     </div>    
               </div>
            :
               <div className="box-t home" onClick={() => setState(true)}>
                     <svg className="home-icon" xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 20 20" fill="#ffffff">
                        <path d="M2.5 0.75H6.5C7.4665 0.75 8.25 1.5335 8.25 2.5V6.5C8.25 7.4665 7.4665 8.25 6.5 8.25H2.5C1.5335 8.25 0.75 7.4665 0.75 6.5V2.5C0.75 1.5335 1.5335 0.75 2.5 0.75ZM13.5 0.75H17.5C18.4665 0.75 19.25 1.5335 19.25 2.5V6.5C19.25 7.4665 18.4665 8.25 17.5 8.25H13.5C12.5335 8.25 11.75 7.4665 11.75 6.5V2.5C11.75 1.5335 12.5335 0.75 13.5 0.75ZM13.5 11.75H17.5C18.4665 11.75 19.25 12.5335 19.25 13.5V17.5C19.25 18.4665 18.4665 19.25 17.5 19.25H13.5C12.5335 19.25 11.75 18.4665 11.75 17.5V13.5C11.75 12.5335 12.5335 11.75 13.5 11.75ZM2.5 11.75H6.5C7.4665 11.75 8.25 12.5335 8.25 13.5V17.5C8.25 18.4665 7.4665 19.25 6.5 19.25H2.5C1.5335 19.25 0.75 18.4665 0.75 17.5V13.5C0.75 12.5335 1.5335 11.75 2.5 11.75Z" stroke-width="1.5"></path>
                     </svg>
               </div>
            }     

            {  
               apps.profile && <Profile data={data} />
            }       

         </div>

         {
            apps.inventory && <Inventory id={items.id} items={items.items} proxItems={items.proxItems} />
         }

         {
            apps.bank && <Bank {...bankData} />
         }
         
         <div className="right-container" style={{ display: apps.inventory || apps.bank || apps.notif ? 'none' : 'block'  }}>
            { inComingCall.name !== "" && <Call type="incoming" data={{name: inComingCall.name, id: inComingCall. id}} />}
            { inCall.name !== "" && <Call type="incall" data={{name: inCall.name, id: inCall. id}} />}

            {
               notifications.list.map((v, k) => {
                  return (
                     <Notification key={k} {...v} />
                  )         
               })
            }
         </div>
      
      </section>
   );
}
   
export default Home;
   
/*
   <Link to='/copy'>sfcz</Link>
   
*/
      