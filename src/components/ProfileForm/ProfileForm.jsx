import React, { useEffect, useState } from 'react'
import styles from './ProfileForm.module.css'
import useForm from '../../hooks/useForm'
import { useSelector, useDispatch } from 'react-redux';
import { EmailInput, PasswordInput, Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { getUserData } from '../../utils/api/api';
import { RefreshTokenThunk, getUserDataThunk, updateUserDataThunk } from '../../services/thunks/user-api-thunk';

function ProfileForm() {
  const dispatch = useDispatch();
  const [inputChanged, setInputChanged] = useState(false);

  const onChange = e => {
    setInputChanged(true);
    hadleChangeUserData(e);
  };

  const {userData: {name: oldName, email: oldEmail}, accessToken} = useSelector((store) => store.userData);


  const {hadleChangeUserData, userData, setUserData} = useForm({
    name: null,
    email: null,
    password: null,
  });

  useEffect(() => {
    setUserData({
      name: oldName,
      email: oldEmail
    })
  },[oldName, oldEmail, setUserData]);

  const hadleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserDataThunk(userData.name, userData.email, userData.password, accessToken));
  }
  const handleGetUserData = (e) => {
    e.preventDefault();
    dispatch(getUserDataThunk(accessToken))
  };

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

  // const hadleRefreshToken = (e) => {
  //   e.preventDefault();
  //   dispatch(RefreshTokenThunk(localStorage.getItem("refreshToken")))
  // }
  return (
    <form onSubmit={hadleSubmit} className={`${styles.form_container}`}>
      <Input onChange={onChange} type={'text'} placeholder={'Имя'} name={'name'} icon={'EditIcon'} value={userData.name}/>
      <EmailInput onChange={onChange} name={'email'} icon={'EditIcon'} value={userData.email} />
      <PasswordInput onChange={onChange} name={'password'} icon='EditIcon' value={userData.password}/>
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
ниже кнопки для проверки запросов
      <Button htmlType="buttom" type="primary" size="default" onClick={handleGetUserData}>
            получить данные пользователя
      </Button>
      <Button htmlType="buttom" type="primary" size="default" >
            обновить токен
      </Button>
    </form>

  )
}

export default ProfileForm