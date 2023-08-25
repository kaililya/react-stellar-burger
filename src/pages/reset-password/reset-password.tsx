import React, { FunctionComponent, useEffect } from 'react';
import styles from '../login/login.module.css';
import { Button, PasswordInput, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, useNavigate } from 'react-router-dom';
import { RootStateOrAny, batch } from 'react-redux';
import useForm from '../../hooks/useForm';
import { setForgottenPassword } from '../../services/actions/user-api-action-creators';
import { resetPasswordThunk } from '../../services/thunks/user-api-thunk';
import { useAppDispatch, useAppSelector } from '../../utils/types';



const ResetPasswordPage = ():JSX.Element => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const {hadleChangeUserData, userData} = useForm({
    password: '',
    token: '',
  });

  const hadleSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    if (!userData.password || !userData.token) {
      return alert('Пожалуйста заполните все поля для изменения пароля')
    } else {
      batch(() => {
        dispatch(resetPasswordThunk(userData.password, userData.token));
        dispatch(setForgottenPassword(false));
      })
      navigate('/login');
    }
    
  }
  const statePasswordForgotten = useAppSelector((store:RootStateOrAny) => store.userData.passwordForgotten);

  useEffect(() => {
    if (!statePasswordForgotten) {
      navigate('/forgot-password');
    };
  }, [statePasswordForgotten]);

  return (
    <div className={styles.wrapper}>
      <section className={`${styles.main_container}`}>
        <h2 className='text text_type_main-medium mb-6'>Восстановление пароля</h2>
        <form onSubmit={hadleSubmit} className={`${styles.form_container} mb-20`}>
          <PasswordInput onChange={hadleChangeUserData} placeholder={'Введите новый пароль'} name={'password'} value={userData.password}/>
          <Input onChange={hadleChangeUserData} type={'text'} placeholder={'Введите код из письма'}  name={'token'} value={userData.token}/>
          <Button htmlType="submit" type="primary" size="medium">Сохранить</Button>
        </form>
        <div className={`${styles.links_container}`}>
          <div className={`${styles.links_row}`}>
            <span className={`text text_type_main-default text_color_inactive ${styles.link_description}`}>Вспомнили пароль?
            <Link to='/login'><Button style={{padding : '0px'}} htmlType="button" type="secondary" size="medium">Войти</Button></Link></span>
          </div>
        </div>
      </section>
    </div>
  )
}
export default ResetPasswordPage