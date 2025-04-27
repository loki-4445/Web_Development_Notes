import Rootlayout from "./rootlayout";
import Register from "./compoments/register/Register";
import Home from './compoments/home/Home'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Login from "./compoments/login/Login";
function App({children}){
    const browserouter=createBrowserRouter([
    {
    path:'/',
    element:<Rootlayout/>,
   children:[
    {        
            path:'register',
            element:<Register/>
    },
    {
        path:'',
        element:<Home/>
    },
    {
        path:'login',
        element:<Login/>
    }
   ]
}
    ])
    return <RouterProvider router={browserouter}>{children}</RouterProvider>
}
export default App