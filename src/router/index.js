import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import NotFound from "../pages/NotFound";
import Artist from "../pages/Artist";
import Album from "../pages/Album";
import AlbumDetail from "../pages/AlbumDetail";
import Track from "../pages/Track";
import Mtv from "../pages/Mtv";

const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
            {
                path : '/',
                element : <Artist/>
            },
            {
                path : '/albums',
                element : <Album/>
            },
            {
                path : '/tracks',
                element : <Track/>
            },
            {
                path : '/mtv',
                element : <Mtv/>
            },            
            {
                path : 'albums/album/:id',
                element : <AlbumDetail/>
            },
            {
                path : '*',
                element : <NotFound/>
            }
        ]
    }
])

export default router;