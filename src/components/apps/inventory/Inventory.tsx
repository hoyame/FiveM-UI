import React, { useState } from 'react'

import './Inventory.scss'

const Inventory = () => {
    interface IObjectComponent {
        icon: string;
        name: string;
        count: string;
    }

    const ObjectComponent = (props: IObjectComponent) => {
        const [state, setState] = useState(false);

        return (
            <div className="box-t object" onClick={() => setState(!state)}>
                <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                    <img className="object-icon" src={props.icon}></img>
                    <p>{props.name}</p>
                </div>

                <div className="object-count">
                    {props.count}
                </div>

                { state &&

                    <div className="box-t menu-obj">
                        <p>Utiliser</p>
                        <p>Donner</p>
                        <p>Jeter</p>
                    </div>
                }
            </div>
        )
    }

    const ItemComponent = () => {
        const [state, setState] = useState(false);

        return (
            <div className='box-t item' onClick={() => setState(!state)}>
                <div className="item-content">
                    <p>Argent</p>
                    <img className="item-icon" src="https://github.com/PichotM/RPG-Inventory-UI/blob/master/ui/assets/img/items/money.png?raw=true"></img>

                    <div className="item-count">
                        100
                    </div>
                </div>

                {   state &&

                    <div className="box-t menu">
                        <p>Utiliser</p>
                        <p>Donner</p>
                        <p>Jeter</p>
                    </div>
                }
            </div>
        )
    }

    return (
        <div className="inventory">
      

            <div className='inventory-e2'>
                <p style={{marginBottom: 30}}>Inventaire</p>  
                
                <div className="items-container">
                    <ItemComponent />    
                    <ItemComponent />    
                    <ItemComponent />    
                    <ItemComponent />    
                    <ItemComponent />    
                    <ItemComponent />    
                    <ItemComponent />    
                    <ItemComponent />    
                    <ItemComponent />    
                    <ItemComponent />    
                    <ItemComponent />    
                    <ItemComponent />    
                </div> 
            </div>

            <div className='inventory-e1'>
                <p style={{marginBottom: 35}}>Object a proximitée</p>

                <ObjectComponent name='Argent Propre' count="10" icon="https://github.com/PichotM/RPG-Inventory-UI/blob/master/ui/assets/img/items/money.png?raw=true"/>
                <ObjectComponent name='Argent Sale' count="1000" icon="https://github.com/PichotM/RPG-Inventory-UI/blob/master/ui/assets/img/items/money.png?raw=true"/>
                <ObjectComponent name='Argent' count="10000000" icon="https://github.com/PichotM/RPG-Inventory-UI/blob/master/ui/assets/img/items/money.png?raw=true"/>
            </div>
        </div>
    )
}

export default Inventory;