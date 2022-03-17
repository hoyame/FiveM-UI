import React from 'react'

import './Bank.scss'

const Bank = () => {
    return (
        <div className="bank">
            <div className='bank-content'>
                <div className='bank-d1'>
                    <div className='box-t bank-card'> 

                    </div>

                    <div className='box-t bank-balance'>
                        <p style={{marginBottom: '5px', opacity: 0.5, fontFamily: "SF-Pro-Text-Regular"}}>Balance</p>
                        <p className='bank-balance-amount'>1.500.500 $</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bank;