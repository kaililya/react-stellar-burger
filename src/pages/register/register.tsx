import React from 'react';
import styles from '../login/login.module.css';
import { EmailInput, Button, PasswordInput, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useForm from '../../hooks/useForm';
import { registerUserThunk } from '../../services/thunks/user-api-thunk';


const RegisterPage = ():JSX.Element => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const {hadleChangeUserData, userData} = useForm({
    name: '',
    email: '',
    password: '',
  });
  
  const hadleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userData.name || !userData.email || !userData.password) {
      return alert('Пожалуйста, заполните все поля для успешной регистрации');
    };
    
    dispatch(registerUserThunk(userData.name, userData.email, userData.password));
    navigate('/');
  };

  return (
    <div className={styles.wrapper}>
      <section className={`${styles.main_container}`}>
        <h2 className='text text_type_main-medium mb-6'>Регистрация</h2>
        <form className={`${styles.form_container} mb-20`} onSubmit={hadleSubmit}>
          <Input onChange={hadleChangeUserData} type={'text'} placeholder={'Имя'} value={userData.name} name={'name'}/>
          <EmailInput onChange={hadleChangeUserData} value={userData.email} name={'email'} isIcon={false} />
          <PasswordInput onChange={hadleChangeUserData} value={userData.password} name={'password'}/>
          <Button htmlType="submit" type="primary" size="medium">Зарегистрироваться</Button>
        </form>
        <div className={`${styles.links_container}`}>
          <div className={`${styles.links_row}`}>
            <span className={`text text_type_main-default text_color_inactive ${styles.link_description}`}>Уже зарегистрированы?
            <Link to='/login'><Button style={{padding : '0px'}} htmlType="button" type="secondary" size="medium">Войти</Button></Link></span>
          </div>
        </div>
      </section>
    </div>
  )
}
export default RegisterPage