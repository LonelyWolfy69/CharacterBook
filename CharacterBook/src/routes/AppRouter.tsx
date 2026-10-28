/* Router   --------> */
import { createBrowserRouter } from "react-router-dom";


/** Importing pages */
import App from '../App'
import { Lobby } from '../pages/lobby/Lobby';
import { Missions } from '../pages/missions/Missions'

/** ----Typing -----> */


export const router = createBrowserRouter ([
        {
            path:'/',
            element:<App />,
        },
        {
            path:'/lobby',
            element:<Lobby />,
        },
        {
            path:'/missions',
            element:<Missions />,
        },
    ]);
