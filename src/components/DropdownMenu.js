import React, { useState } from 'react';
import {ReactComponent as Gear} from '../img/gear.svg';
import {ReactComponent as Back} from '../img/back.svg';
import {ReactComponent as Globe} from '../img/globe.svg';
import { CSSTransition } from 'react-transition-group';

function DropdownMenu(){
    const[activeMenu, setActiveMenu] = useState('main');
    const[menuHeight, setMenuHeight] = useState(null);

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }
    function DropdownItem(props){
        return(
            <a href="#" className="menu-item" onClick={()=> props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className="icon-button">{props.leftIcon}</span>
    
                {props.children}
    
                <span className="icon-right">{props.rightIcon}</span>
            </a>
        )    
    }

    return(
        <div className="dropdown" style={{ height: menuHeight }}>
            <CSSTransition
                in={activeMenu === 'main'} 
                unmountOnExit 
                timeout={500} 
                classNames="menu-primary"
                onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem
                        leftIcon="🦄"> Meu Perfil</DropdownItem>
                    <DropdownItem
                        leftIcon={<Gear/>}
                        goToMenu="settings"
                        > Configurações</DropdownItem>
                    <DropdownItem
                        leftIcon={<Globe/>}
                        goToMenu="languages"
                        > Linguagens</DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'settings'} 
                unmountOnExit 
                timeout={500} 
                classNames="menu-secondary"
                onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem goToMenu="main" leftIcon={<Back/>}> Voltar</DropdownItem>
                    <DropdownItem leftIcon="🥇">Item 1</DropdownItem>
                    <DropdownItem leftIcon="🥈">Item 2</DropdownItem>
                    <DropdownItem leftIcon="🥉">Item 3</DropdownItem>
                    <DropdownItem leftIcon="🕓">Item 4</DropdownItem>
                    <DropdownItem leftIcon="🕔">Item 5</DropdownItem>
                </div>
            </CSSTransition>
            <CSSTransition
                in={activeMenu === 'languages'} 
                unmountOnExit 
                timeout={500} 
                classNames="menu-secondary"
                onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem goToMenu="main" leftIcon={<Back/>}> Voltar</DropdownItem>
                    <DropdownItem leftIcon="🌩">JavaSctip</DropdownItem>
                    <DropdownItem leftIcon="🖖">C++</DropdownItem>
                    <DropdownItem leftIcon="👴">Clipper</DropdownItem>
                </div>
            </CSSTransition>
        </div>
    )
}

export default DropdownMenu