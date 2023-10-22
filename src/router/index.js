import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import Contact from '../pages/Contact';
import CountryDetail from "../pages/CountryDetail";
import NotFound from "../pages/NotFound";
import Api from "../pages/Api";
import ApiBlogDetail from "../pages/ApiBlogDetail";
import Artist from "../pages/Artist";
import Album from "../pages/Album";
import AlbumDetail from "../pages/AlbumDetail";

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
                element : <Contact/>
            },
            {
                path : '/mtv',
                element : <Api/>
            },
            {
                path : '/country/:id',
                element : <CountryDetail/>
            },            
            {
                path : 'albums/album/:id',
                element : <AlbumDetail/>
            },
            {
                path : 'api/blog/:id',
                element : <ApiBlogDetail/>
            },
            {
                path : '*',
                element : <NotFound/>
            }
        ]
    }
])

export default router;