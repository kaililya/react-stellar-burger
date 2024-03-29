import styles from './login.module.css';
import { EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { loginUserThunk } from '../../services/thunks/user-api-thunk';
import { useAppDispatch } from '../../utils/types';

const LoginPage = ():JSX.Element => {

  const dispatch = useAppDispatch();
  const {hadleChangeUserData, userData} = useForm({
    email: '',
    password: '',
  });

  const hadleSubmit = (e:React.FormEvent):void|undefined => {
    e.preventDefault();

    if (!userData.email || !userData.password) {
      return alert('Пожалуйста, заполните все поля для авторизации на странице');
    }
    dispatch(loginUserThunk(userData.email,  userData.password));
  };

  return (
    <div className={styles.wrapper}>
      <section className={`${styles.main_container}`}>
        <h2 className='text text_type_main-medium mb-6'>Вход</h2>
        <form className={`${styles.form_container} mb-20`} onSubmit={hadleSubmit}>
          <EmailInput extraClass={styles.input_extra} onChange={hadleChangeUserData} name={'email'} isIcon={false} value={userData.email}  />
          <PasswordInput extraClass={styles.input_extra} onChange={hadleChangeUserData} name={'password'} value={userData.password} />
          <Button  htmlType="submit" type="primary" size="medium">Войти</Button>
        </form>
        <div className={`${styles.links_container}`}>
          <div className={`${styles.links_row}`}>
            <span className={`text text_type_main-default text_color_inactive ${styles.link_description}`}>Вы - новый пользователей?
            <Link to='/register'><Button style={{padding : '0px'}} htmlType="button" type="secondary" size="medium">Зарегистрироваться</Button></Link></span>
          </div>
          <div className={`${styles.links_row}`}>
            <span className={`text text_type_main-default text_color_inactive ${styles.link_description}`}>Забыли пароль?
            <Link to='/forgot-password'><Button style={{padding : '0px'}} htmlType="button" type="secondary" size="medium">Восстановить пароль</Button></Link></span>
          </div>
          <div className={`${styles.links_row}`}>
            <span className={`text text_type_main-default  ${styles.link_description}`}>Или используйте</span>
          </div>
          <div className={`${styles.links_row}`}>
            <span className={`text text_type_main-default text_color_inactive ${styles.link_description}`}>Логин: </span>
            <span className={`text text_type_main-default text_color_inactive ${styles.link_description}`}> foto2@mail.ru</span>
          </div>
          <div className={`${styles.links_row}`}>
            <span className={`text text_type_main-default text_color_inactive ${styles.link_description}`}>Пароль: </span>
            <span className={`text text_type_main-default text_color_inactive ${styles.link_description}`}> 123456</span>
          </div>
        </div>
      </section>
    </div>
  )
}
export default LoginPage