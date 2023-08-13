import React from 'react'

function useForm<T>(inputs:T) {

  const [userData, setUserData] = React.useState<T>(inputs);

  const hadleChangeUserData = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {value, name} = e.target
    setUserData({...userData, [name]: value});
  };

  return { userData, setUserData, hadleChangeUserData };
}

export default useForm