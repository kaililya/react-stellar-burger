import { FormEvent, useEffect, useState } from 'react'
import styles from './ProfileForm.module.css'
import useForm from '../../hooks/useForm'
import { PasswordInput, Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { updateUserDataThunk2, } from '../../utils/api/api';
import { useAppDispatch, useAppSelector } from '../../utils/types';

type TFormStateType = {
  name: string | undefined;
  email: string | undefined;
  password: string | undefined;
};

const ProfileForm = ():JSX.Element => {
  const dispatch = useAppDispatch();
  const [inputChanged, setInputChanged] = useState<boolean>(false);
  const userDataStore = useAppSelector(store => store.userData.userData);
  const oldEmail = userDataStore?.email;
  const oldName = userDataStore?.name;

  const {hadleChangeUserData, userData, setUserData} = useForm<TFormStateType>({
    name: '',
    email: '',
    password: '',
  });

  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setInputChanged(true);
    hadleChangeUserData(e);
  };

  useEffect(() => {
    setUserData({
      name: oldName,
      email: oldEmail,
      password: ''
    })
  }, [oldName, oldEmail, setUserData]);

  const hadleSubmit = (e:FormEvent) => {
    e.preventDefault();
    console.log(userData.name, userData.email, userData.password)
    dispatch(updateUserDataThunk2(userData.name, userData.email, userData.password));
  }

  const handleCancelChanges = (e:React.SyntheticEvent) => {
    e.preventDefault();
    setUserData({
      ...userData,
      name: oldName,
      email: oldEmail,
      password: ''
    });
    setInputChanged(false);
  };

  return (
    <form onSubmit={hadleSubmit} className={`${styles.form_container}`}>
      {/* @ts-ignore */}
      <Input extraClass={styles.input_extra} onChange={onChange} type={'text'} placeholder={'Имя'} name={'name'} icon={'EditIcon'} value={userData.name}/>
      {/* @ts-ignore */}
      <Input extraClass={styles.input_extra} onChange={onChange} name={'email'} icon={'EditIcon'} value={userData.email} />
      <PasswordInput extraClass={styles.input_extra} onChange={onChange} name={'password'} icon='EditIcon' value={''}/>
      {inputChanged && (
        <div className={`${styles.button_container}`}>
          <Button htmlType="button" type="secondary" size="large" onClick={handleCancelChanges}>
            Отменить
          </Button>
          <Button htmlType="submit" type="primary" size="medium">
            Сохранить
          </Button>
        </div>
      )}
    </form>
  )
}

export default ProfileForm