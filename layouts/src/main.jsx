//import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import Store from '../contexts/Store.jsx'
import UsersStore from '../contexts/UsersStore.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
<Store>
   <UsersStore>
   <App />
   </UsersStore>
</Store>
   
  
)
