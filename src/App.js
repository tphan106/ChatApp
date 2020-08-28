import React from 'react';
import './App.css';
import Sidebar from "./Sidebar";
import Chat from "./Chat"
import { Router } from '@material-ui/icons';

function App() {
  return (
    <div className="app">
      <div className="app_body">
        {/*Side bar*/}
       <Router>
        <Sidebar />
        <Chat />
        </Router>
      </div>
    </div>
  );
}

export default App;
