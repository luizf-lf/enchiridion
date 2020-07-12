import React from 'react'
import DropdownItem from './DropdownItem'
import {ReactComponent as Gear} from '../img/gear.svg'

function DropdownMenu(){
    return(
        <div className="dropdown">
            <DropdownItem
                leftIcon="🦄">Meu Perfil</DropdownItem>
            <DropdownItem
                leftIcon={<Gear/>}>Configurações</DropdownItem>
        </div>
    )
}

export default DropdownMenu