import React from 'react'

import './Inventory.scss'

const Inventory = () => {
    interface IObjectComponent {
        icon: string;
        name: string;
        count: string;
    }

    const ObjectComponent = (props: IObjectComponent) => {
        return (
            <div className="box-t object">
                <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                    <img className="object-icon" src={props.icon}></img>
                    <p>{props.name}</p>
                </div>

                <div className="object-count">
                    {props.count}
                </div>
            </div>
        )
    }

    const ItemComponent = () => {
        return (
            <div className='box-t item'>
                <div className="item-content">
                    <p>Melcia</p>
                    <img className="item-icon" src="https://github.com/PichotM/RPG-Inventory-UI/blob/master/ui/assets/img/items/money.png?raw=true"></img>

                    <div className="item-count">
                        100
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="box-t inventory">
            <div className='inventory-e1'>
                <p style={{marginBottom: 35}}>Object a proximitée</p>

                <ObjectComponent name='Argent Propre' count="10" icon="https://github.com/PichotM/RPG-Inventory-UI/blob/master/ui/assets/img/items/money.png?raw=true"/>
                <ObjectComponent name='Argent Sale' count="1000" icon="https://github.com/PichotM/RPG-Inventory-UI/blob/master/ui/assets/img/items/money.png?raw=true"/>
                <ObjectComponent name='Argent' count="10000000" icon="https://github.com/PichotM/RPG-Inventory-UI/blob/master/ui/assets/img/items/money.png?raw=true"/>
            </div>

            <div className='inventory-e2'>
                <p style={{marginBottom: 30}}>Inventaire</p>  
                
                <div className="items-container">
                    <ItemComponent />    
                    <ItemComponent />    
                    <ItemComponent />    
                    <ItemComponent />    
                    <ItemComponent />    
                    <ItemComponent />    
                </div> 
            </div>

            <div className='inventory-e1'>
                
            </div>
        </div>
    )
}

export default Inventory;