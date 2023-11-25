import styles from '../login/login.module.css';
import { EmailInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, useNavigate  } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { batch} from 'react-redux'; 
import { setForgottenPassword } from '../../services/actions/user-api-action-creators';
import { forgotPasswordThunk } from '../../services/thunks/user-api-thunk';
import { useAppDispatch } from '../../utils/types';


const ForgotPasswordPage = ():JSX.Element => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const {hadleChangeUserData, userData} = useForm({
    email: '',
  });
  const handleSubmit = (e:React.FormEvent):void|undefined => {
    e.preventDefault();
    batch(() => {
      dispatch(forgotPasswordThunk(userData.email));
      dispatch(setForgottenPassword(true));
    })
    navigate('/reset-password', {replace: true});
  }

  return (
    <div className={styles.wrapper}>
      <section className={`${styles.main_container}`}>
        <h2 className='text text_type_main-medium mb-6'>Восстановление пароля</h2>
        <form onSubmit={handleSubmit} className={`${styles.form_container}`}>
          <EmailInput extraClass={styles.input_extra} onChange={hadleChangeUserData} value={userData.email} name={'email'} isIcon={false} />
          <Button htmlType="submit" type="primary" size="medium">Восстановить</Button>
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
export default ForgotPasswordPage