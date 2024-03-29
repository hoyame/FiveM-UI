import React, { useEffect, useState } from 'react'
import { fetchNui } from '../../hooks';

import './Bank.scss'

interface IBank {
    id: number;
    cash: number;
    balance: number;
    transactions: any[];
}

const Bank = (props: IBank) => {
    useEffect(() => {
        fetchNui<any>('blur');
    })

    const DeposerSvg = () => {
        return (
            <svg className="bank-button-icon" width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.18164 14.6396C0.645508 14.6396 0.258789 15.0439 0.258789 15.5889C0.258789 16.1338 0.645508 16.5381 1.18164 16.5381H12.792C13.3369 16.5381 13.7324 16.1338 13.7324 15.5889C13.7324 15.0439 13.3369 14.6396 12.792 14.6396H7.20215C7.39551 14.6045 7.57129 14.499 7.71191 14.3496L13.3281 8.78613C13.5391 8.5752 13.6445 8.33789 13.6445 8.08301C13.6445 7.53809 13.249 7.14258 12.7217 7.14258C12.4492 7.14258 12.2031 7.25684 12.0273 7.43262L10.2168 9.20801L7.87012 11.7832L7.95801 9.9375V1.75488C7.95801 1.1748 7.5625 0.779297 7 0.779297C6.42871 0.779297 6.0332 1.1748 6.0332 1.75488V9.9375L6.12109 11.792L3.77441 9.20801L1.97266 7.43262C1.78809 7.24805 1.55078 7.14258 1.27832 7.14258C0.742188 7.14258 0.355469 7.53809 0.355469 8.08301C0.355469 8.33789 0.452148 8.5752 0.663086 8.78613L6.2793 14.3496C6.41992 14.499 6.5957 14.6045 6.78906 14.6396H1.18164Z" />
            </svg>
        );
    }

    const RetraitSvg = () => {
        return (
            <svg className="bank-button-icon"  width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 16.5381C7.5625 16.5381 7.95801 16.1426 7.95801 15.5625V7.37988L7.87012 5.53418L10.2168 8.10938L12.0273 9.88477C12.2031 10.0605 12.4492 10.1748 12.7217 10.1748C13.249 10.1748 13.6445 9.7793 13.6445 9.23438C13.6445 8.97949 13.5391 8.74219 13.3281 8.53125L7.71191 2.96777C7.57129 2.81836 7.39551 2.71289 7.20215 2.67773H12.792C13.3369 2.67773 13.7324 2.27344 13.7324 1.72852C13.7324 1.18359 13.3369 0.779297 12.792 0.779297H1.18164C0.645508 0.779297 0.258789 1.18359 0.258789 1.72852C0.258789 2.27344 0.645508 2.67773 1.18164 2.67773H6.78906C6.5957 2.71289 6.41992 2.81836 6.2793 2.96777L0.663086 8.53125C0.452148 8.74219 0.355469 8.97949 0.355469 9.23438C0.355469 9.7793 0.742188 10.1748 1.27832 10.1748C1.55078 10.1748 1.78809 10.0693 1.97266 9.88477L3.77441 8.10938L6.12109 5.52539L6.0332 7.37988V15.5625C6.0332 16.1426 6.42871 16.5381 7 16.5381Z" />
            </svg>
        );
    }

    const PayementSvg = () => {
        return (
            <svg className="bank-button-icon" width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.6357 9.89746L13.627 1.07324C13.627 0.458008 13.2227 0.0361328 12.5898 0.0361328H3.75684C3.15918 0.0361328 2.74609 0.484375 2.74609 1.01172C2.74609 1.53027 3.19434 1.96094 3.73047 1.96094H6.88574L10.6123 1.83789L9.0127 3.24414L0.671875 11.5938C0.469727 11.8047 0.355469 12.0508 0.355469 12.2969C0.355469 12.8154 0.830078 13.3076 1.36621 13.3076C1.6123 13.3076 1.8584 13.2021 2.06934 13L10.4189 4.65039L11.8428 3.05078L11.6934 6.61914V9.92383C11.6934 10.4688 12.124 10.9258 12.6602 10.9258C13.1875 10.9258 13.6357 10.4775 13.6357 9.89746Z" />
            </svg>
        );
    }

    interface ITransaction {
        type?: number;
        amount: number;
        source?: string; 
    }

    const TransactionComponent = (fruitCrush: ITransaction) => {
        const [nameTransction, setNameTransaction] = useState("Depot")
        const [color, setColor] = useState("ff453a")

        useEffect(() => {
            if (fruitCrush.type == 1) {
                // depot
                setNameTransaction("Depot")
                setColor("#34c759")
            } else if (fruitCrush.type == 2) {
                // retrait
                setNameTransaction("Retrait")
                setColor("#ff453a")
            } else if (fruitCrush.type == 3) {
                // payement
                setNameTransaction("Payement")
                setColor("#32ade6")
            }
        }, [])

        return (
            <div className='bank-transaction'>
                <div className='bank-transaction-icon' style={{backgroundColor: color}}>
                    { nameTransction === "Depot" && <DeposerSvg />  }
                    { nameTransction === "Retrait" && <RetraitSvg />  }
                    { nameTransction === "Payement" && <PayementSvg />  }
                </div>

                <div className='bank-transaction-container'>
                    <div className='bank-transaction-content'>
                        <p>{nameTransction}</p>
                        <p style={{fontSize: 12, opacity: 0.5}}>Banque</p>
                    </div>

                    <div className='bank-transaction-amount'>
                        {Intl.NumberFormat('fr-FR', {style: "decimal", currency: 'USD'}).format(fruitCrush.amount)} $
                    </div>

                </div>
            </div>
        );
    }

    return (
        <div className="bank">
            <div className='bank-content'>
                <div className='bank-d1'>
                    <div className='box-t bank-card'> 
                        <img style={{height: 20, marginBottom: 40}} src="https://cdn.discordapp.com/attachments/810248842460397619/954368835501326436/Visa-Logo-Free-PNG.png"></img>
                    
                        <p style={{fontSize: 15, fontFamily: "Credit-Fonts", marginBottom: 40}}>9037 3983 3279 4739</p>
                    
                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                            <p style={{fontSize: 13, fontFamily: "Credit-Fonts"}}>04/25</p>
                            <p style={{fontSize: 13, fontFamily: "Credit-Fonts"}}>836</p>
                        </div>
                    </div>

                    <div className='box-t bank-balance'>
                        <div>
                            <div style={{display: "flex", flexDirection: 'row', height: 25}}>
                                <svg className='bank-balance-icon' width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.5059 0.0517578H3.48535C1.58691 0.0517578 0.59375 1.03613 0.59375 2.91699V3.70801H21.3975V2.91699C21.3975 1.03613 20.4131 0.0517578 18.5059 0.0517578ZM4.26758 12.4707C3.74902 12.4707 3.39746 12.1279 3.39746 11.627V10.001C3.39746 9.50879 3.74902 9.15723 4.26758 9.15723H6.4209C6.93066 9.15723 7.28223 9.50879 7.28223 10.001V11.627C7.28223 12.1279 6.93066 12.4707 6.4209 12.4707H4.26758ZM3.48535 15.2832H18.5059C20.4131 15.2832 21.3975 14.29 21.3975 12.4092V5.77344H0.59375V12.4092C0.59375 14.2988 1.58691 15.2832 3.48535 15.2832Z" />
                                </svg>


                                <p style={{marginBottom: '5px', opacity: 0.75, fontFamily: "SF-Pro-Text-Regular"}}>Balance</p>
                            </div>
                            <p className='bank-balance-amount'>{Intl.NumberFormat('fr-FR', {style: "decimal", currency: 'USD'}).format(props.balance)} $</p>
                        </div>
                    </div>

                    <div className='box-t bank-balance'>
                        <div>
                            <div style={{display: "flex", flexDirection: 'row', height: 25}}>
                                <svg className='bank-balance-icon' width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.99121 18.7422C14.9746 18.7422 19.0879 14.6289 19.0879 9.6543C19.0879 4.67969 14.9658 0.566406 9.98242 0.566406C5.00781 0.566406 0.90332 4.67969 0.90332 9.6543C0.90332 14.6289 5.0166 18.7422 9.99121 18.7422ZM9.98242 14.7871C9.74512 14.7871 9.56934 14.6113 9.56934 14.3652V13.7412C8.25977 13.6357 7.29297 12.9502 7.0293 11.9834C6.99414 11.8691 6.97656 11.7637 6.97656 11.6582C6.97656 11.2891 7.23145 11.0342 7.60938 11.0342C7.92578 11.0342 8.13672 11.2012 8.26855 11.5264C8.40918 12.0625 8.83984 12.458 9.56934 12.5635V10.1729L9.41113 10.1377C7.89062 9.78613 7.09961 9.08301 7.09961 7.89648C7.09961 6.61328 8.12793 5.73438 9.56934 5.60254V4.9873C9.56934 4.73242 9.74512 4.56543 9.98242 4.56543C10.2197 4.56543 10.4043 4.74121 10.4043 4.9873V5.60254C11.6348 5.72559 12.5488 6.40234 12.7949 7.34277C12.8213 7.44824 12.8477 7.55371 12.8477 7.65918C12.8477 8.01074 12.5928 8.26562 12.2236 8.26562C11.8984 8.26562 11.6875 8.08105 11.5557 7.78223C11.3799 7.24609 10.9844 6.90332 10.4043 6.79785V9.05664L10.6064 9.10059C12.1973 9.39941 12.9971 10.1289 12.9971 11.377C12.9971 12.7656 11.8896 13.6182 10.4043 13.75V14.3652C10.4043 14.6113 10.2197 14.7871 9.98242 14.7871ZM9.56934 8.8457V6.78906C8.875 6.90332 8.45312 7.31641 8.45312 7.80859C8.45312 8.30078 8.77832 8.61719 9.50781 8.82812L9.56934 8.8457ZM10.4043 10.375V12.5635C11.2393 12.4668 11.6523 12.0449 11.6523 11.4736C11.6523 10.9639 11.3623 10.6299 10.5713 10.4189L10.4043 10.375Z" />
                                </svg> 

                                <p style={{marginBottom: '5px', opacity: 0.75, fontFamily: "SF-Pro-Text-Regular"}}>Cash</p>
                            </div>
                            <p className='bank-balance-amount'>{Intl.NumberFormat('fr-FR', {style: "decimal", currency: 'USD'}).format(props.cash)} $</p>
                        </div>
                    </div>

                    <div className="bank-buttons">
                        <div className='box-t bank-button' onClick={() => {
                            fetchNui<any>('bank-deposit', { id: props.id })
                        }}>
                            <div className='bank-button-icon-container'>
                                <svg className="bank-button-icon" width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.18164 14.6396C0.645508 14.6396 0.258789 15.0439 0.258789 15.5889C0.258789 16.1338 0.645508 16.5381 1.18164 16.5381H12.792C13.3369 16.5381 13.7324 16.1338 13.7324 15.5889C13.7324 15.0439 13.3369 14.6396 12.792 14.6396H7.20215C7.39551 14.6045 7.57129 14.499 7.71191 14.3496L13.3281 8.78613C13.5391 8.5752 13.6445 8.33789 13.6445 8.08301C13.6445 7.53809 13.249 7.14258 12.7217 7.14258C12.4492 7.14258 12.2031 7.25684 12.0273 7.43262L10.2168 9.20801L7.87012 11.7832L7.95801 9.9375V1.75488C7.95801 1.1748 7.5625 0.779297 7 0.779297C6.42871 0.779297 6.0332 1.1748 6.0332 1.75488V9.9375L6.12109 11.792L3.77441 9.20801L1.97266 7.43262C1.78809 7.24805 1.55078 7.14258 1.27832 7.14258C0.742188 7.14258 0.355469 7.53809 0.355469 8.08301C0.355469 8.33789 0.452148 8.5752 0.663086 8.78613L6.2793 14.3496C6.41992 14.499 6.5957 14.6045 6.78906 14.6396H1.18164Z" />
                                </svg>
                            </div>

                            <p style={{fontSize: 15}}>Deposer</p>
                        </div>

                        <div className='box-t bank-button' onClick={() => {
                            fetchNui<any>('bank-retrait', { id: props.id })
                        }}>
                            <div className='bank-button-icon-container' style={{backgroundColor: "#ff453a"}}>
                                <svg className="bank-button-icon"  width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 16.5381C7.5625 16.5381 7.95801 16.1426 7.95801 15.5625V7.37988L7.87012 5.53418L10.2168 8.10938L12.0273 9.88477C12.2031 10.0605 12.4492 10.1748 12.7217 10.1748C13.249 10.1748 13.6445 9.7793 13.6445 9.23438C13.6445 8.97949 13.5391 8.74219 13.3281 8.53125L7.71191 2.96777C7.57129 2.81836 7.39551 2.71289 7.20215 2.67773H12.792C13.3369 2.67773 13.7324 2.27344 13.7324 1.72852C13.7324 1.18359 13.3369 0.779297 12.792 0.779297H1.18164C0.645508 0.779297 0.258789 1.18359 0.258789 1.72852C0.258789 2.27344 0.645508 2.67773 1.18164 2.67773H6.78906C6.5957 2.71289 6.41992 2.81836 6.2793 2.96777L0.663086 8.53125C0.452148 8.74219 0.355469 8.97949 0.355469 9.23438C0.355469 9.7793 0.742188 10.1748 1.27832 10.1748C1.55078 10.1748 1.78809 10.0693 1.97266 9.88477L3.77441 8.10938L6.12109 5.52539L6.0332 7.37988V15.5625C6.0332 16.1426 6.42871 16.5381 7 16.5381Z" />
                                </svg>
                            </div>

                            <p style={{fontSize: 15}}>Retirer</p>
                        </div>

                        <div className='box-t bank-button' onClick={() => {
                            fetchNui<any>('bank-transfer', { id: props.id })
                        }}>
                            <div className='bank-button-icon-container' style={{backgroundColor: "#32ade6"}}>
                                <svg className="bank-button-icon" width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.6357 9.89746L13.627 1.07324C13.627 0.458008 13.2227 0.0361328 12.5898 0.0361328H3.75684C3.15918 0.0361328 2.74609 0.484375 2.74609 1.01172C2.74609 1.53027 3.19434 1.96094 3.73047 1.96094H6.88574L10.6123 1.83789L9.0127 3.24414L0.671875 11.5938C0.469727 11.8047 0.355469 12.0508 0.355469 12.2969C0.355469 12.8154 0.830078 13.3076 1.36621 13.3076C1.6123 13.3076 1.8584 13.2021 2.06934 13L10.4189 4.65039L11.8428 3.05078L11.6934 6.61914V9.92383C11.6934 10.4688 12.124 10.9258 12.6602 10.9258C13.1875 10.9258 13.6357 10.4775 13.6357 9.89746Z" />
                                </svg>
                            </div>

                            <p style={{fontSize: 15}}>Transferer</p>
                        </div>
                    </div>
                </div>

                <div className="bank-d2">
                    <div className='box-t bank-transactions'> 
                        <div style={{height: 25, display: 'flex', alignItems: 'center', marginBottom: 15, marginLeft: 10}}>
                            <svg style={{marginRight: 7.5}} width="20" height="16" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.20801 0.594727L0.77832 5.12988C0.602539 5.30566 0.488281 5.57812 0.488281 5.81543C0.488281 6.36914 0.875 6.74707 1.41992 6.74707C1.68359 6.74707 1.89453 6.65918 2.07031 6.47461L3.88086 4.59375L5.04102 3.25781L4.9707 5.12109V16.0811C4.9707 16.6348 5.36621 17.0303 5.91113 17.0303C6.45605 17.0303 6.84277 16.6348 6.84277 16.0811V5.12109L6.78125 3.25781L7.93262 4.59375L9.74316 6.47461C9.91895 6.65918 10.1387 6.74707 10.4023 6.74707C10.9385 6.74707 11.3252 6.36914 11.3252 5.81543C11.3252 5.57812 11.2109 5.30566 11.0352 5.12988L6.60547 0.594727C6.21875 0.19043 5.60352 0.181641 5.20801 0.594727ZM16.792 16.7227L21.2217 12.1875C21.3975 12.0029 21.5117 11.7305 21.5117 11.4932C21.5117 10.9482 21.125 10.5703 20.5801 10.5703C20.3164 10.5703 20.1055 10.6582 19.9297 10.834L18.1191 12.7148L16.959 14.0508L17.0293 12.1875V1.22754C17.0293 0.691406 16.6338 0.287109 16.0889 0.287109C15.5527 0.287109 15.1572 0.691406 15.1572 1.22754V12.1875L15.2188 14.0508L14.0674 12.7148L12.2568 10.834C12.0811 10.6582 11.8613 10.5703 11.6064 10.5703C11.0615 10.5703 10.6748 10.9482 10.6748 11.4932C10.6748 11.7305 10.7891 12.0029 10.9648 12.1875L15.3945 16.7227C15.7812 17.1357 16.3965 17.1445 16.792 16.7227Z" fill="#32ade6"/>
                            </svg>

                            <p style={{fontSize: 20, marginBottom: 0, opacity: 0.75, fontFamily: "SF-Pro-Text-Regular"}}>Transactions</p>
                        </div>

                        <div className='scroll-transactions'>
                            {
                                props.transactions.map((v, k) => {
                                    return (
                                        <TransactionComponent key={k} {...v} />
                                    )
                                })
                            }                  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bank;