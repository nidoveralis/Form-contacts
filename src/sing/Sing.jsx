import React from 'react';
import'./main.scss';



const Sing = () =>{
    const [login,setLogin] = React.useState();
    const [pass,setPass] = React.useState();
    const [loginError,setLoginError] = React.useState('Неверное значение');
    const [passwordError,setPasswordError] = React.useState('Пароль не должен быть пустым');
    const [dirty,setDirty] = React.useState(false);
    const [passDirty,setPassDirty] = React.useState(false);


    const blurHandler = (e) =>{
        switch (e.target.name){
            case "email":
                setDirty(true)
                break
            case "password":
                setPassDirty(true)
                break
        }
    }
    const loginHandler = (e) => { 
        setLogin(e.target.value)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(e.target.value).toLowerCase())){
            setLoginError('Неверное значение')
        }else{
            setLoginError('')
        }
    }
    
    return(
        <div>
            <div className="wrapper-form">
                <form >
                    <h2>Login form</h2>
                    <p>Ведите mail</p>
                    {(dirty && loginError) && <div style={{color:"red"}}>{loginError}</div>}
                    <input type="text" className="login" name="login" value={login} onBlur={e => blurHandler(e)} onChange = {e=> setLogin(e.target.value)} placeholder="Email"></input>
                    <p>Ведите пароль</p>
                    {(passwordError && passDirty) &&<div style={{color:"red"}}>{passwordError}</div>}
                    <input type="text" placeholder="Password" name="password" className="password" value={pass} onChange={e=> setPass(e.target.value)} onBlur={e =>blurHandler(e)} ></input>
                    <div className="wrapper-btn">
                        <button className="entry-login" type="button" onClick={()=> console.log(login,pass)}>Войти</button> 
                        <button className="register"  type="button" >Зарегистрироваться</button>                   
                    </div>
                </form>
            </div>
        </div>
    )
}
 
export default Sing;