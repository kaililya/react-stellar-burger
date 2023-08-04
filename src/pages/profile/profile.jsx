import React from 'react';
import styles from './profile.module.css'
import { EmailInput, PasswordInput, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { NavLink, useNavigate } from 'react-router-dom';


function ProfilePage() {
  const value2 = 'mail@stellar.burgers'
  const [value, setValue] = React.useState('')
  const onChange = e => {
  setValue(e.target.value)
}
  // с 8-10 строку просто чтобы ошибки не было (юх стейт не нужен)

  return (
    <section>
      <nav className={''}>
        <ul className={``}>
          <li className={''}>
            <NavLink
              activeClassName={''}
              className={`${''} text text_type_main-medium`}
              to={`${'url'}`}
              exact
            >
              Профиль
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName={''}
              className={`${''} text text_type_main-medium`}
              to={`${'url'}/orders`}
            >
              История заказов
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName={''}
              className={`${''} text text_type_main-medium`}
              to="/login"
              onClick={''}
            >
              Выход
            </NavLink>
          </li>
        </ul>
        <p
          className={`${''} text text_type_main-default text_color_inactive`}
        >
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </nav>
      <form className={`${styles.form_container}`}>
       <Input type={'text'} placeholder={'Имя'}  name={'name'} value='Марк' icon={'EditIcon'}/>
        <EmailInput onChange={onChange} value={value2} name={'email'} icon={'EditIcon'} />
        <PasswordInput onChange={onChange} value={'222222'} name={'password'} icon='EditIcon'/>
      </form>
    </section>
  )

}

export default ProfilePage