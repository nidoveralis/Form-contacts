import React from 'react';
import'./comein.scss';



const Sing = () =>{
    const [login,setLogin] = React.useState();
    const [pass,setPass] = React.useState();
    React.useEffect(() =>{
        console.log(login,pass)
    },[login, pass])
    return(
        <div>
            <div className="wrapper-form">
                <form >
                    <h2>Login form</h2>
                    <p>Ведите mail</p>
                    <input type="text" className="login" value={login} onChange={e=> setLogin(e.target.value)} placeholder="Email"></input>
                    <p>Ведите пароль</p>
                    <input type="text" placeholder="Password" className="password" value={pass} onChange={e=> setPass(e.target.value)}></input>
                    <div className="wrapper-btn">
                        <button className="entry-login">Войти</button> 
                        <button className="register">Зарегистрироваться</button>                   
                    </div>
                </form>
            </div>
        </div>
    )
}
 
export default Sing;