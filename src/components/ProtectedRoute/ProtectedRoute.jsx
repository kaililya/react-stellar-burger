import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router';


function ProtectedRoute({ onlyUnAuth = false, component}) {
  const dispatch = useDispatch();
  const isAuthChecked = useSelector((store) => store.userData.isUserAuth);
  const user = useSelector((store) => store.userData.userData);
  const location = useLocation();

  // useEffect(() => {
  //   dispatch(setAuthChecked(false));
  //   dispatch(checkUserAuth());
  // }, [dispatch]);

  if (isAuthChecked) {
    return null;
  }

  if (onlyUnAuth && user) {
    const { from } = location.state || { from: { pathname: "/" } };
    return <Navigate to={from} />;
  }

  if (!onlyUnAuth && !user) {
    return <Navigate to="/login" state={{ from: location }} />
  }

  return component;
}

export const OnlyAuth = (props) => <ProtectedRoute onlyUnAuth={false} {...props} />;
export const OnlyUnAuth = (props) => <ProtectedRoute onlyUnAuth={true} {...props} />;


