import React from 'react'
import { useDispatch, useSelector, RootStateOrAny  } from 'react-redux'
import { Navigate, useLocation } from 'react-router';
import { setAuthorizationState,  } from '../../services/actions/user-api-action-creators';
import { checkUserAuth } from '../../utils/api/api';

type TProtectedRoute = {
  readonly onlyUnAuth: boolean;
  readonly component: JSX.Element;
};

const ProtectedRoute = ({ onlyUnAuth = false, component}:TProtectedRoute):JSX.Element => {
  const dispatch = useDispatch();

  const isAuthChecked = useSelector((store:RootStateOrAny ) => store.userData.isUserAuth) as boolean;
  const user = useSelector((store:RootStateOrAny) => store.userData.userData) as null | { email: string, name: string };
  const location = useLocation();
  
  React.useEffect(() => {
    dispatch(setAuthorizationState(false));
    dispatch(checkUserAuth());
  },[dispatch])


  if (onlyUnAuth && user) {
    const { from } = location.state || { from: { pathname: "/" } };
    return <Navigate to={from} />;
  }

  if (!onlyUnAuth && !user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return component;
}

export const OnlyAuth = (props: any) => <ProtectedRoute onlyUnAuth={false} {...props} />;
export const OnlyUnAuth = (props: any) => <ProtectedRoute onlyUnAuth={true} {...props} />;

// TODO
// 1) Написать что-то, помимо any. Я передаю компонент, но не могу типизировать его, как в типах выше 

