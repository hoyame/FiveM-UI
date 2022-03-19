import * as React from 'react';
import { Component, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Call } from '../components/call/Call';
import Hud from '../components/hud/Hud';
import { Notification } from "../components/notification/Notification";

import './home.scss'
import Profile from '../apps/profile/Profile';
import Overlay from '../components/overlay/Overlay';
import Bank from '../apps/bank/Bank';
import Inventory from '../apps/inventory/Inventory';
import Notifications from '../apps/notifications/Notifications';


const Home = () => {
   const [state, setState] = useState(false)

   const [apps, setApps] = useState({
      profile: false,
      inventory: false,
      bank: false,
      notif: false
   })

   const [oldApp, setOldApp] = useState("")

   const openApp = (arg: string) => {
      const old = oldApp;
      setOldApp(arg);

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
            
                        <svg onClick={() => setApps({...apps, profile: !apps.profile})} className="home-app-icon" width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M3.46777 16.8633H18.5234C20.4219 16.8633 21.4062 15.8877 21.4062 14.0156V3.31055C21.4062 1.43848 20.4219 0.462891 18.5234 0.462891H3.46777C1.56934 0.462891 0.584961 1.42969 0.584961 3.31055V14.0156C0.584961 15.8877 1.56934 16.8633 3.46777 16.8633ZM7.3877 8.66309C6.33301 8.66309 5.47168 7.7666 5.47168 6.57129C5.47168 5.4375 6.33301 4.50586 7.3877 4.50586C8.45996 4.50586 9.3125 5.4375 9.3125 6.57129C9.3125 7.7666 8.45996 8.67188 7.3877 8.66309ZM13.1533 5.79785C12.8193 5.79785 12.5732 5.54297 12.5732 5.21777C12.5732 4.91016 12.8193 4.66406 13.1533 4.66406H17.7676C18.0928 4.66406 18.3389 4.91016 18.3389 5.21777C18.3389 5.54297 18.0928 5.79785 17.7676 5.79785H13.1533ZM13.1533 9.23438C12.8193 9.23438 12.5732 8.97949 12.5732 8.66309C12.5732 8.34668 12.8193 8.10059 13.1533 8.10059H17.7676C18.0928 8.10059 18.3389 8.34668 18.3389 8.66309C18.3389 8.97949 18.0928 9.23438 17.7676 9.23438H13.1533ZM4.03906 12.7236C3.71387 12.7236 3.54688 12.4951 3.54688 12.2051C3.54688 11.3789 4.75977 9.26074 7.3877 9.26074C10.0244 9.26074 11.2461 11.3789 11.2461 12.2051C11.2461 12.4951 11.0791 12.7236 10.7539 12.7236H4.03906ZM13.1533 12.6709C12.8193 12.6709 12.5732 12.4248 12.5732 12.1172C12.5732 11.792 12.8193 11.5371 13.1533 11.5371H17.7676C18.0928 11.5371 18.3389 11.792 18.3389 12.1172C18.3389 12.4248 18.0928 12.6709 17.7676 12.6709H13.1533Z" />
                        </svg>
         
                        <svg onClick={() => setApps({...apps, inventory: !apps.inventory})} className="home-app-icon" width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M18.0576 18.2148V3.98535H18.541C20.4307 3.98535 21.3887 4.93457 21.3887 6.79785V15.4023C21.3887 17.2656 20.4307 18.2148 18.541 18.2148H18.0576ZM7.44922 3.15039V3.98535H14.5508V3.15039C14.5508 2.7373 14.2783 2.47363 13.8213 2.47363H8.17871C7.73047 2.47363 7.44922 2.7373 7.44922 3.15039ZM16.5459 3.98535V18.2148H5.4541V3.98535H5.67383V3.07129C5.67383 1.68262 6.57031 0.856445 8.06445 0.856445H13.9355C15.4297 0.856445 16.3262 1.68262 16.3262 3.07129V3.98535H16.5459ZM3.4502 18.2148C1.57812 18.2148 0.611328 17.2656 0.611328 15.4023V6.79785C0.611328 4.93457 1.57812 3.98535 3.4502 3.98535H3.94238V18.2148H3.4502Z" />
                        </svg>   
               
                     
                        <svg className="home-app-icon" width="22" height="22" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M10 18.7334C14.9658 18.7334 19.0791 14.6289 19.0791 9.6543C19.0791 4.68848 14.9658 0.575195 9.99121 0.575195C5.02539 0.575195 0.920898 4.68848 0.920898 9.6543C0.920898 14.6289 5.03418 18.7334 10 18.7334ZM10 16.9492C5.95703 16.9492 2.71387 13.6973 2.71387 9.6543C2.71387 5.61133 5.94824 2.36816 9.99121 2.36816C14.0342 2.36816 17.2861 5.61133 17.2949 9.6543C17.2949 13.6973 14.043 16.9492 10 16.9492ZM9.99121 14.4795C10.0967 14.4795 10.1934 14.4707 10.2988 14.4707L10.5361 14.9189C10.6152 15.0771 10.7822 15.1738 10.9668 15.1387C11.1338 15.1123 11.2568 14.9717 11.292 14.7959L11.3623 14.2773C11.5557 14.2246 11.749 14.1543 11.9336 14.0752L12.3115 14.4092C12.4434 14.541 12.6104 14.5586 12.7861 14.4707C12.9355 14.3916 13.0059 14.2246 12.9707 14.04L12.8652 13.5303C13.0498 13.3984 13.1992 13.2754 13.3311 13.1523L13.8057 13.3369C13.9727 13.416 14.1396 13.3721 14.2803 13.2227C14.3857 13.0908 14.4033 12.9062 14.3066 12.7568L14.0254 12.3086C14.1396 12.1416 14.2451 11.9658 14.3242 11.79L14.8516 11.8164C15.0273 11.8164 15.1855 11.7197 15.2383 11.5527C15.2998 11.377 15.2471 11.2012 15.0977 11.0957L14.6934 10.7793C14.7461 10.5859 14.7812 10.3838 14.8076 10.1729L15.291 10.0234C15.4756 9.96191 15.5723 9.82129 15.5723 9.63672C15.5723 9.46094 15.4668 9.32031 15.291 9.25L14.8076 9.10059C14.7812 8.89844 14.7461 8.69629 14.6934 8.50293L15.0977 8.17773C15.2471 8.07227 15.2998 7.89648 15.2383 7.73828C15.1855 7.5625 15.0186 7.45703 14.8428 7.46582L14.3242 7.49219C14.2275 7.29004 14.1309 7.11426 14.0254 6.96484L14.3066 6.5166C14.3945 6.37598 14.377 6.18262 14.2715 6.05957C14.1484 5.91895 13.9727 5.86621 13.8145 5.93652L13.3311 6.12109C13.1904 5.99805 13.0322 5.86621 12.8652 5.74316L12.9707 5.24219C13.0059 5.04883 12.9355 4.88184 12.7861 4.81152C12.6279 4.71484 12.4346 4.73242 12.3115 4.86426L11.9336 5.19824C11.749 5.11914 11.5557 5.05762 11.3623 4.99609L11.292 4.47754C11.2568 4.31055 11.1338 4.16992 10.9668 4.14355C10.791 4.1084 10.6152 4.20508 10.5361 4.3457L10.2988 4.81152C10.1934 4.81152 10.1055 4.80273 9.99121 4.80273C9.89453 4.80273 9.78906 4.81152 9.69238 4.81152L9.44629 4.3457C9.36719 4.19629 9.2002 4.1084 9.02441 4.14355C8.85742 4.16992 8.72559 4.31055 8.69043 4.47754L8.62891 4.99609C8.42676 5.05762 8.24219 5.11914 8.05762 5.19824L7.67969 4.87305C7.54785 4.74121 7.36328 4.71484 7.19629 4.81152C7.05566 4.89062 6.97656 5.04883 7.01172 5.25098L7.11719 5.74316C6.9502 5.86621 6.79199 5.99805 6.66016 6.12109L6.17676 5.93652C6.00977 5.86621 5.84277 5.91895 5.71973 6.05957C5.60547 6.18262 5.58789 6.36719 5.67578 6.5166L5.95703 6.96484C5.84277 7.13184 5.74609 7.31641 5.6582 7.49219L5.14844 7.46582C4.97266 7.45703 4.80566 7.5625 4.75293 7.73828C4.68262 7.89648 4.73535 8.06348 4.88477 8.17773L5.28906 8.50293C5.23633 8.72266 5.20117 8.90723 5.18359 9.10059L4.69141 9.25C4.51562 9.31152 4.41016 9.46094 4.41016 9.63672C4.41016 9.82129 4.51562 9.96191 4.69141 10.0234L5.18359 10.1729C5.20117 10.3662 5.23633 10.5684 5.28906 10.7793L4.88477 11.0957C4.74414 11.2012 4.69141 11.377 4.75293 11.5439C4.80566 11.7197 4.96387 11.8164 5.13965 11.8164L5.6582 11.79C5.74609 11.9658 5.84277 12.1416 5.95703 12.3086L5.67578 12.7568C5.5791 12.915 5.60547 13.0996 5.71094 13.2227C5.84277 13.3721 6.01855 13.416 6.18555 13.3369L6.65137 13.1523C6.7832 13.2754 6.93262 13.3984 7.11719 13.5303L7.01172 14.04C6.97656 14.2246 7.04688 14.3828 7.20508 14.4707C7.36328 14.5586 7.54785 14.541 7.67969 14.4092L8.04883 14.0752C8.24219 14.1543 8.42676 14.2246 8.62891 14.2773L8.69043 14.7871C8.72559 14.9717 8.85742 15.1123 9.02441 15.1387C9.20898 15.1738 9.36719 15.0771 9.44629 14.9189L9.69238 14.4707C9.78906 14.4707 9.89453 14.4795 9.99121 14.4795ZM11.3184 9.17969C11.0635 8.56445 10.5713 8.23047 9.98242 8.23047C9.91211 8.23047 9.83301 8.23047 9.70996 8.25684L8.4707 6.13867C8.93652 5.93652 9.44629 5.82227 9.99121 5.82227C11.9512 5.82227 13.5156 7.27246 13.7354 9.17969H11.3184ZM6.22949 9.64551C6.22949 8.39746 6.79199 7.30762 7.67969 6.61328L8.92773 8.74902C8.69043 9.02148 8.57617 9.3291 8.57617 9.6543C8.57617 9.9707 8.69043 10.2695 8.92773 10.5508L7.64453 12.6426C6.77441 11.9482 6.22949 10.8672 6.22949 9.64551ZM9.49902 9.64551C9.49902 9.39062 9.71875 9.1709 9.99121 9.1709C10.2725 9.1709 10.4922 9.38184 10.4922 9.64551C10.4922 9.91797 10.2725 10.1377 9.99121 10.1377C9.71875 10.1377 9.49902 9.91797 9.49902 9.64551ZM9.99121 13.46C9.4375 13.46 8.91016 13.3369 8.43555 13.126L9.70996 11.043C9.83301 11.0781 9.9209 11.0781 9.98242 11.0781C10.5801 11.0781 11.0723 10.7266 11.3271 10.1025H13.7354C13.5156 12.0098 11.9512 13.46 9.99121 13.46Z" />
                        </svg>
                     
                        <svg onClick={() => setApps({...apps, bank: !apps.bank})} className="home-app-icon" width="18" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M18.5059 0.0517578H3.48535C1.58691 0.0517578 0.59375 1.03613 0.59375 2.91699V3.70801H21.3975V2.91699C21.3975 1.03613 20.4131 0.0517578 18.5059 0.0517578ZM4.26758 12.4707C3.74902 12.4707 3.39746 12.1279 3.39746 11.627V10.001C3.39746 9.50879 3.74902 9.15723 4.26758 9.15723H6.4209C6.93066 9.15723 7.28223 9.50879 7.28223 10.001V11.627C7.28223 12.1279 6.93066 12.4707 6.4209 12.4707H4.26758ZM3.48535 15.2832H18.5059C20.4131 15.2832 21.3975 14.29 21.3975 12.4092V5.77344H0.59375V12.4092C0.59375 14.2988 1.58691 15.2832 3.48535 15.2832Z" />
                        </svg>  
                           
                  
                        <svg className="home-app-icon" width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M7.53027 14.8154L11.7227 17.1533C11.9336 17.2676 12.1094 17.3555 12.3291 17.4082V2.80957L8.25098 0.348633C7.9873 0.19043 7.74121 0.0761719 7.53027 0.0234375V14.8154ZM0.736328 15.9932C0.736328 16.7578 1.21973 17.1797 1.92285 17.1797C2.17773 17.1797 2.44141 17.1006 2.74023 16.9424L6.23828 15.0439V0.120117C6.04492 0.199219 5.81641 0.295898 5.5791 0.436523L1.60645 2.69531C1.00879 3.0293 0.736328 3.50391 0.736328 4.17188V15.9932ZM13.6123 17.3643C13.7178 17.3379 13.8232 17.2939 13.9199 17.2236L18.3672 14.71C18.9824 14.3672 19.2637 13.9014 19.2637 13.2334V1.47363C19.2637 0.673828 18.7715 0.27832 18.0244 0.27832C17.752 0.27832 17.4619 0.357422 17.1543 0.524414L13.6123 2.49316V17.3643Z" />
                        </svg>  
            
                        <svg className="home-app-icon" width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M1.96875 15.4639H16.0225C16.9277 15.4639 17.4814 14.9717 17.4814 14.2334C17.4814 13.3018 16.6377 12.502 15.8467 11.7461C15.2227 11.1396 15.082 9.87402 14.9678 8.70508C14.8271 5.48828 13.8867 3.2207 11.6104 2.40332C11.25 1.24316 10.292 0.34668 8.99121 0.34668C7.69922 0.34668 6.74121 1.24316 6.37207 2.40332C4.10449 3.2207 3.15527 5.48828 3.02344 8.70508C2.90918 9.87402 2.75977 11.1396 2.14453 11.7461C1.35352 12.502 0.509766 13.3018 0.509766 14.2334C0.509766 14.9717 1.06348 15.4639 1.96875 15.4639ZM8.99121 19.085C10.5557 19.085 11.6895 17.9688 11.8037 16.6943H6.1875C6.30176 17.9688 7.43555 19.085 8.99121 19.085Z" />
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
               apps.profile && <Profile />
            }       

         </div>

         {
            apps.inventory && <Inventory />
         }

         {
            apps.bank && <Bank />
         }

         {
            apps.notif && <Notifications />
         }
         
         <div className="right-container" style={{ display: apps.inventory || apps.bank || apps.notif ? 'none' : 'block'  }}>
            <Call type="incoming" data={{name: "Flozii"}} />
            <Call type="incall" data={{name: "Kiruu"}} />
            
            <Notification title="Annonce" subtitle="Staff" message="Flozi i aime enormement avaler des grosses queues, surtout celle de son pote panda, il obeis tel un chien a sa meuf mama qui est louche Flozii aime enormement avaler des grosses queues, surtout celle de son pote panda, il obeis tel un chien a sa meuf mama qui est louche" />
            <Notification title="Annonce" subtitle="Staff" message="Mama aime flozii" />
            <Notification title="Annonce" subtitle="Staff" message="flozii aime Mama" />
         </div>
      
      </section>
   );
}
   
export default Home;
   
/*
   <Link to='/copy'>sfcz</Link>
   
*/
      