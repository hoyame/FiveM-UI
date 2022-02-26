import React from 'react';

const Home = React.lazy(() => import('./components/home/home'));
const Message = React.lazy(() => import('./components/apps/message/Message'));

const routes = [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/message',
        component: Message,
        exact: true
    }, 
];

export default routes;