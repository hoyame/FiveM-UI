import React from 'react';

const Home = React.lazy(() => import('./components/home/home'));

const routes = [
    {
        path: '/',
        component: Home,
        exact: true
    }
];

export default routes;