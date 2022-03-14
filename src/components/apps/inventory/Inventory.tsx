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
                    <svg className="user-icon" width="70" height="70" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.9912 22.7422C18.9746 22.7422 23.0879 18.6289 23.0879 13.6543C23.0879 8.67969 18.9658 4.56641 13.9824 4.56641C9.00781 4.56641 4.90332 8.67969 4.90332 13.6543C4.90332 18.6289 9.0166 22.7422 13.9912 22.7422ZM13.9912 16.6953C11.5127 16.6953 9.58789 17.583 8.65625 18.6025C7.46094 17.3105 6.73145 15.5703 6.73145 13.6543C6.73145 9.62012 9.95703 6.38574 13.9824 6.38574C18.0166 6.38574 21.2598 9.62012 21.2686 13.6543C21.2686 15.5703 20.5391 17.3105 19.335 18.6113C18.4033 17.583 16.4785 16.6953 13.9912 16.6953ZM13.9912 15.2539C15.6963 15.2715 17.0234 13.8125 17.0234 11.9316C17.0234 10.1562 15.6875 8.6709 13.9912 8.6709C12.3037 8.6709 10.959 10.1562 10.9678 11.9316C10.9766 13.8125 12.2949 15.2451 13.9912 15.2539Z" />
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