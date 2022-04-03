import React, { useEffect, useState } from 'react'
import { fetchNui } from '../../hooks';

import './Inventory.scss'

interface IInventory {
    id: number;
    items: any[];
    proxItems: any[];
}

const Inventory = (propso: IInventory) => {
    useEffect(() => {
        fetchNui<any>('blur');
    })
    
    interface IObjectComponent {
        icon: string;
        name: string;
        count: number;
        idItem: string;
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
                        <p onClick={() => fetchNui<any>('inventory-use', { name: props.name, count: props.count, id: propso.id })}>Utiliser</p>
                        <p onClick={() => fetchNui<any>('inventory-give', { name: props.name, count: props.count, id: propso.id })}>Donner</p>
                        <p onClick={() => fetchNui<any>('inventory-drop', { name: props.name, count: props.count, id: propso.id })}>Jeter</p>
                    </div>
                }
            </div>
        )
    }

    const ItemComponent = (props: IObjectComponent) => {
        const [state, setState] = useState(false);

        return (
            <div className='box-t item' style={{opacity: !props.name ? 0.3 : 1}} onClick={() => setState(!state)}>
                { props.name &&
                    <>
                        <div className="item-content">
                            <p>{props.name}</p>
                            <img className="item-icon" src={props.icon}></img>

                            <div className="item-count">
                                {props.count}
                            </div>
                        </div>

                        {   state &&

                            <div className="box-t menu">
                                <p onClick={() => fetchNui<any>('inventory-use',  { idItem: props.idItem, name: props.name, count: props.count, id: propso.id })}>Utiliser</p>
                                <p onClick={() => fetchNui<any>('inventory-give', { idItem: props.idItem, name: props.name, count: props.count, id: propso.id })}>Donner</p>
                                <p onClick={() => fetchNui<any>('inventory-drop', { idItem: props.idItem, name: props.name, count: props.count, id: propso.id })}>Jeter</p>
                            </div>
                        }
                    </>
                }

            </div>
        )
    }

    return (
        <div className="inventory">
            <div className='inventory-e2'>
                <p style={{marginBottom: 30}}>Inventaire</p>  
                
                <div className="items-container">
                    <tbody>
                        {[...Array(24)].map((v, k) =>
                            <ItemComponent {...propso.items[k]} />
                        )}
                    </tbody>
                </div> 
            </div>

            <div className='inventory-e1'>
                <p style={{marginBottom: 35}}>Object a proximitée</p>

                {
                    propso.proxItems.map((v, k) => {
                        return (
                            <ObjectComponent key={k} {...v} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Inventory;