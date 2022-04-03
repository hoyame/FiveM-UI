import React, { Suspense, useState } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";


import routes from "../routes";
import SFProDisplayBold from '../fonts/SF-Pro-Display-Bold.otf';
import SFProDisplayRegular from '../fonts/SF-Pro-Display-Regular.otf';
import SFProDisplaySemibold from '../fonts/SF-Pro-Display-Semibold.otf';
import CreditFont from '../fonts/credit.ttf';

import "./Menu.scss";
import "./App.scss";
import { useNuiEvent } from "./hooks";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Credit-Fonts';
    src: url(${CreditFont});
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
  const [show, setShow] = useState(false)
 
  useNuiEvent<any>('verify-1', (s: any) => {
    if (s == "ewo3if9biuwe8bibge6iub4gei") {
      setShow(true)
    }
  })

  const loading = () => (
    <div className="">Chargement...</div>
  );

  return (
    
    <>
    { show &&
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
    }
    </>
  );
};

export default App;
