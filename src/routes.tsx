import React from 'react';

const HomeScreen = React.lazy(() => import('./components/home/home'));

const routes = [
    {
        path: '/',
        component: HomeScreen,
        exact: true
    }
];

export default routes;