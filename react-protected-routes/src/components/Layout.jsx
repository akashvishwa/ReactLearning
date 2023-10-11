import React from 'react'
import './Layout.css';
import { Outlet,useNavigate } from 'react-router-dom';

export const Layout = () => {
    const navigate=useNavigate();
    const goBack=()=>navigate(-1);
    return (
        <div className='layout-con'>
            <div className="header">
                <h1>Welcome!</h1>
            </div>
            <div className="main">
                <Outlet />
            </div>
            <button className='btn btn-warning' onClick={()=>{goBack()}}>Go Back</button>
            <div className="footer">Footer Content</div>
        </div>
    )
}
