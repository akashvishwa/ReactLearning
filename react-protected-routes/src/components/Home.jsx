import React from 'react'
import { Link,Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const Home = () => {
    const{ auth }=useAuth();
  return (
    <div>
        home
        <div className="welcome">
            hello {auth?.login.name} you are an {auth?.login.role}
        </div>
        <div>
            <Link to='/linkpage'>Link page</Link>

        </div>
    </div>
  )
}
