import React,{useState} from 'react';
import Add from '../add/Add.jsx'
import Newfriend from '../add/Newfriend.jsx';
import'./contacts.style.scss';
import'../sing/main.scss';

const Contacts  = ()=>{
    const array =[{name:'Alina', surname:'Diakova',phone:'8 9995397274'},{name:'GGAlina', surname:'Diakova',phone:'8 9995397274'}]
    const [addShow,setAddShow]=useState(false)
    const [user,setUser]=useState([])
    
    let count1=array.length-1
   
    const qqq=()=>{
        
        array.push(user)
        //setUser({...user,[id]:count1})
        
        console.log(count1,array)
    }


    

        return(
            <div>
                <div className='wrapper-contacts'>
                    <div className='block-contacts'>
                    <Newfriend user={array[array.length]}/>
                    <button className='add'onClick={qqq}> + </button>
                    <Add onChange={setUser} />
                    </div>
                </div>
            </div>
    )
}

export default Contacts;