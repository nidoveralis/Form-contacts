import React from 'react'
import '../contact/contacts.style.scss';
import'./add.style.scss';
import '../sing/main.scss';


const Add = ()=>{
    return(
        <div>
            <div className='wrapper-contacts'>
                <div className='block-contacts'>
                    <form>
                        <label>Введите имя</label>
                        <input name='name' type='text'></input>
                        <label>Введите фамилию</label>
                        <input name='surname' type='text'></input>
                        <label>Введите телефон</label>
                        <input name='phone' type='text'></input>
                        <div className='contacts-btn'>
                            <button className='entry-login'>Сохранить</button>
                            <button className='entry-login'>Отмена</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Add;