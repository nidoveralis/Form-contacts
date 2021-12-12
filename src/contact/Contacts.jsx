import React from 'react';
import'./contacts.style.scss';
import'../sing/comein.scss';

const Contacts = () =>{
    return(
        <div>
            <div className='wrapper-contacts'>
            <div className='block-contacts'>
                <div className='contact'>
                    <div className='icon'></div>
                    <div className='wrapper-name'>
                        <div className='name'>Alina</div>  
                        <div className='surname'>Diakova</div>  
                        <div className='phone'>89995397274</div>               
                    </div>
                    <div className='contacts-btn'>
                        <span>+</span>
                        <div className='del'>#</div>
                    </div>
                </div>
                <button type='button' className='add'>+</button>
            </div>
            </div>
        </div>
    )
}

export default Contacts;