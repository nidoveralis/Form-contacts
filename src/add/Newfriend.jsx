import React, { useState } from 'react';
import Add from './Add.jsx';
import'./add.style.scss';
import'../contact/contacts.style.scss';
import'../sing/main.scss';

const Newfriend  = ({user})=>{
    
    return(
        <div className='friends-block'>
            <div className='wcontact'></div>
                <div className='contact'>
                    <div className='icon'></div>
                    <div className='wrapper-name'>
                        <div className='name' >{user.name}</div>  
                        <div className='surname'>{user.surname}</div>  
                        <div className='phone'>{user.phone}</div>               
                    </div>
                    <div className='contacts-btn'>
                        <span>+</span>
                        <div className='del'>#</div>
                    </div>
                </div>
        </div>
    )
}

export default Newfriend;
