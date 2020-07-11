import React from 'react';
import Navbar from './components/Navbar';
import NavItem from './components/NavItem';
import {ReactComponent as  Bell} from './img/bell.svg';
import {ReactComponent as  Plus} from './img/plus.svg';
import {ReactComponent as  Messenger} from './img/messenger.svg';

function App() {
  return (
    <div >
      <Navbar>
        <NavItem icon={<Plus/>}/>
        <NavItem icon={<Messenger/>}/>
        <NavItem icon={<Bell/>}/>
      </Navbar>
    
    </div>
  );
}

export default App;
