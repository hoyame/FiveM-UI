import React, { Suspense, useState } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";


import routes from "../routes";
import Hud from "./components/hud/Hud";
import Menu from "./components/menu/Menu";
import { Notification } from "./components/notification/Notification";
import { Call } from "./components/call/Call";
import { Keypad } from "./apps/keypad/Keypad";


import SFProDisplayBold from '../fonts/SF-Pro-Display-Bold.otf';
import SFProDisplayRegular from '../fonts/SF-Pro-Display-Regular.otf';
import SFProDisplaySemibold from '../fonts/SF-Pro-Display-Semibold.otf';

import "./Menu.scss";
import "./App.scss";
import Message from "./apps/message/Message";
import Home from "./home/home";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "HapnaSlab", serif;
    margin: 0;
    padding: 0;
    background-image: url('https://cdn.gamer-network.net/2014/usgamer/GTA-V-PS4-Screenshot-12.jpg');
  }
 
  @font-face {
    font-family: 'SF-Pro-Text-Bold';
    src: url(${SFProDisplayBold});
  }
  @font-face {
    font-family: 'SF-Pro-Text-Regular';
    src: url(${SFProDisplayRegular});
  }
  @font-face {
    font-family: 'SF-Pro-Text-Semibold';
    src: url(${SFProDisplaySemibold});
  }
`;

const App = () => {
  const [state, setState] = useState(false)
  const [apps, setApps] = useState({
    keypad: false,
    message: true
  })

  const loading = () => (
    <div className="">Chargement...</div>
  );

  return (
    // <div className="app-backround">
    //   <Suspense fallback={loading()}>
    //     <HashRouter basename='/'>
    //       <Switch>
    //         {routes.map((route, idx) => {
    //           return route.component ? (
    //             <Route
    //               key={idx}
    //               path={route.path}
    //               exact={route.exact}
    //               render={(props: any) => <route.component {...props} />}
    //             />
    //           ) : null;
    //         })}
    //       </Switch>
    //     </HashRouter>
    //   </Suspense>
    // </div>
    <>
      <GlobalStyle />
      <Suspense fallback={loading()}>
         <HashRouter basename='/'>
           <Switch>
             {routes.map((route, idx) => {
               return route.component ? (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  render={(props: any) => <route.component {...props} />}
                />
              ) : null;
            })}
          </Switch>
        </HashRouter>
      </Suspense>
    </>
  );
};

export default App;
