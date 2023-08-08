import React, { useEffect, useState } from 'react'
import styles from './ProfileForm.module.css'
import useForm from '../../hooks/useForm'
import { useSelector, useDispatch } from 'react-redux';
import { EmailInput, PasswordInput, Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { getUserData, updateUserDataThunk2, } from '../../utils/api/api';
import { RefreshTokenThunk, getUserDataThunk, updateUserDataThunk } from '../../services/thunks/user-api-thunk';

function ProfileForm() {
  const dispatch = useDispatch();
  const [inputChanged, setInputChanged] = useState(false);

  const {userData: {name: oldName, email: oldEmail}, accessToken} = useSelector((store) => store.userData);

  const {hadleChangeUserData, userData, setUserData} = useForm({
    name: '',
    email: '',
    password: '',
  });

  const onChange = e => {
    setInputChanged(true);
    hadleChangeUserData(e);
  };

  useEffect(() => {
    setUserData({
      name: oldName,
      email: oldEmail
    })
  }, [oldName, oldEmail, setUserData]);

  const hadleSubmit = (e) => {
    e.preventDefault();
    console.log(userData.name, userData.email, userData.password)
    dispatch(updateUserDataThunk2(userData.name, userData.email, userData.password));
  }

  const handleCancelChanges = (e) => {
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
      <Input onChange={onChange} type={'text'} placeholder={'Имя'} name={'name'} icon={'EditIcon'} value={userData.name}/>
      <EmailInput onChange={onChange} name={'email'} icon={'EditIcon'} value={userData.email} />
      <PasswordInput onChange={onChange} name={'password'} icon='EditIcon' value={''}/>
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