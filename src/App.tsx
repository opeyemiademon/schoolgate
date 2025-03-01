
import './App.css'
import { BrowserRouter as Router } from "react-router-dom";

import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import Routers from './components/Routers';

function App() {

  return (
    <>
     
<ReactNotifications />
         
         <Router>
         
      
      <Routers/> 

       </Router> 
    </>
  )
}

export default App
