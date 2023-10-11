import React from 'react'
import {Navigate,Outlet, useLocation} from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export const RequireLogin = ({roles}) => {
    const{auth}=useAuth();
    const location=useLocation();

  return (
    roles.filter(x=>x==auth?.login?.role).length>0?<Outlet/> :
    auth.login?<Navigate to='/unautherised' state={{from:location}} replace></Navigate>
    :<Navigate to='/login' state={{from:location}} replace></Navigate>
  )
}
