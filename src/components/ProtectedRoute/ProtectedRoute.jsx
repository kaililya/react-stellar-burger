import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router';
import { setAuthorizationState,  } from '../../services/actions/user-api-action-creators';
import { checkUserAuth } from '../../services/thunks/user-api-thunk';


function ProtectedRoute({ onlyUnAuth = false, component}) {
  const dispatch = useDispatch();

  const isAuthChecked = useSelector((store) => store.userData.isUserAuth);
  const user = useSelector((store) => store.userData.userData);
  const location = useLocation();

  React.useEffect(() => {
    dispatch(setAuthorizationState(false));
    dispatch(checkUserAuth());
  },[dispatch])

  if (!isAuthChecked) {
    console.log('словился в 1 if')
    return null;
  }

  if (onlyUnAuth && user) {
    console.log('словился в 2 if')
    const { from } = location.state || { from: { pathname: "/" } };
    return <Navigate to={from} />;
  }

  if (!onlyUnAuth && !user) {
    console.log('словился в 3 if')
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return component;
}

export const OnlyAuth = (props) => <ProtectedRoute onlyUnAuth={false} {...props} />;
export const OnlyUnAuth = (props) => <ProtectedRoute onlyUnAuth={true} {...props} />;



