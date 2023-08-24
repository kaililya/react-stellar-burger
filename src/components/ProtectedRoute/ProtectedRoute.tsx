import React from 'react'
import { RootStateOrAny  } from 'react-redux'
import { Navigate, useLocation } from 'react-router';
import { setAuthorizationState,  } from '../../services/actions/user-api-action-creators';
import { checkUserAuth } from '../../utils/api/api';
import { useAppDispatch, useAppSelector } from '../../utils/types';

type TProtectedRoute = {
  readonly onlyUnAuth: boolean;
  readonly component: JSX.Element;
};

const ProtectedRoute = ({ onlyUnAuth = false, component}:TProtectedRoute):JSX.Element => {
  const dispatch = useAppDispatch();

  const isAuthChecked = useAppSelector((store:RootStateOrAny ) => store.userData.isUserAuth);
  const user = useAppSelector((store:RootStateOrAny) => store.userData.userData);
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


