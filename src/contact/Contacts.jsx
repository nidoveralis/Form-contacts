import React,{useState} from 'react';
import Add from '../add/Add.jsx'
import Newfriend from '../add/Newfriend.jsx';
import'./contacts.style.scss';
import'../sing/main.scss';

const Contacts  = ()=>{
    
    const [addShow,setAddShow]=useState(false)
    const [user,setUser]=useState([])

    

        return(
            <div>
                <div className='wrapper-contacts'>
                    <div className='block-contacts'>
                    <Newfriend user={user}/>
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
                        <button className='add'> + </button>
                        <Add onChange={setUser}/>
                    </div>
                </div>
            </div>
    )
}

export default Contacts;