import './App.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Rootlayout from './Rootlayout'
import Home from './compoments/home/home'
import Register from './compoments/register/Register'
import Login from './compoments/login/Login'
import Registerform from './compoments/register-forms/Registerform'
import Parent from './compoments/parent/Parent'
import Managetasks from './compoments/tasks/Managetasks'
import Users from './compoments/users/Users'
import Technologies from './compoments/technologices/Tech'
import Java from './compoments/java/Java'
import Node from './compoments/node/Node'
import Vue from './compoments/vue/Vue'
import Userdashboard from './compoments/userdashboard/Userdashboard'
function App() {
  const browserRouter = createBrowserRouter([
    {
      path: '/',
      element: <Rootlayout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: 'register',
          element: <Register />
        },
        {
          path: 'login',
          element: <Login />
        },
        {
          path: 'parent',
          element:<Parent/>
        },
        {
          path: 'registerform',
          element: <Registerform />
        },
        {
          path: 'users',
          element:<Users/>
        },
        {
          path: 'tasks',
          element:<Managetasks/>
        },
        {
          path: 'user-dash',
          element:<Userdashboard/>
        },
        {
          path: 'technologies',
          element:<Technologies/>,
          children:[
            {
              path:'java',
              element:<Java />
            },
            {
              path:'node',
              element:<Node />
            },
            {
              path:'vue',
              element:<Vue/>
            }
          ]
        }
      ]
    }
  ]);

  return    
}

export default App;
