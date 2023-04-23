import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import Modules from './Component/Modules';
import Instructor from './Component/Instructor';
import Quiz from './Component/Quiz';
import Topic from './Component/Topic';
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
const router=createBrowserRouter([
    {
        path:"/",
        element: <App />,
    },
    {
        path:"/Modules",
        element:<Modules/>,
    },
    {
        path:"/Instructor",
        element:<Instructor/>,
    },
    {
        path:"/Quiz",
        element: <Quiz />,
    },
    {
        path:"/Topic",
        element:<Topic/>,
    },
]);

const root=createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
);
