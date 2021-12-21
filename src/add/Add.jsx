import React,{useState,useEffect} from 'react'
import Newfriend from './Newfriend.jsx';
import '../contact/contacts.style.scss';
import'./add.style.scss';
import '../sing/main.scss';



const Add = ({onChange})=>{

    const [user,setUser]=useState({})
   
    const getInputs=(e)=>{
        const {name,value}=e.currentTarget
        setUser({...user,[name]:value})
    }
    const sedContact=()=>{
        onChange(user)
    }
        return(
            <div>
                <div className='wrapper-contacts'>
                    <div className='block-contacts'>
                    
                        <form > 
                            <label>Введите имя</label>
                            <input name='name' type='text' value={user.name} onChange={getInputs}></input>
                            <label>Введите фамилию</label>
                            <input name='surname' type='text' value={user.surname} onChange={getInputs} ></input>
                            <label>Введите телефон</label>
                            <input name='phone' type='text' value={user.phone} onChange={getInputs}></input>
                            <button className='entry-login' type='button' onClick={sedContact}>Сохранить</button>
                            
                        </form>
                    </div>
                </div>
            </div>
        )
    
}

export default Add;