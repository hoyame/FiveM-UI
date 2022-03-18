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
                    <p>Argent</p>
                    <img className="item-icon" src="https://github.com/PichotM/RPG-Inventory-UI/blob/master/ui/assets/img/items/money.png?raw=true"></img>

                    <div className="item-count">
                        100
                    </div>
                </div>
            </div>
        )
    }

    const UserComponent = () => {
        return (
            <div className="user-container">
                <div className="box-t user">
                    <svg className="user-icon" width="50" height="50" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.00879 8.5752C9.9248 8.5752 11.5508 6.87012 11.5508 4.66406C11.5508 2.51074 9.91602 0.858398 8.00879 0.858398C6.09277 0.858398 4.44922 2.53711 4.45801 4.68164C4.45801 6.87012 6.08398 8.5752 8.00879 8.5752ZM2.52441 16.749H13.4756C14.9258 16.749 15.4268 16.3096 15.4268 15.501C15.4268 13.2422 12.5615 10.1309 8 10.1309C3.44727 10.1309 0.573242 13.2422 0.573242 15.501C0.573242 16.3096 1.07422 16.749 2.52441 16.749Z" />
                    </svg>


                </div>

                <p className="user-name">Argent</p>

            </div>
        )
    }

    return (
        <div className="inventory">
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
                    <ItemComponent />    
                    <ItemComponent />    
                    <ItemComponent />    
                    <ItemComponent />    
                    <ItemComponent />    
                    <ItemComponent />    
                </div> 
            </div>

            <div className='inventory-e1'>
                <p style={{marginBottom: 30}}>Personnes a proximitée</p>  

                <div className="user-container">
                    <UserComponent />   
                </div>
            </div>
        </div>
    )
}

export default Inventory;