import React from 'react'
import { Link } from 'react-router-dom'

export const Linkpage = () => {
    return (
        <div><h1>Linkpage</h1>
            <div className='linksection'>
                <div className="common"> Common Pages
                    <div><Link to='/'>home</Link></div>
                    <div><Link to='/library'>library</Link></div>
                </div>
                <div>
                    Private Pages
                    <div><Link to='/admin'>Admin Page</Link></div>
                    <div><Link to='/manager'>Manager</Link></div>
                </div>
                <div>
                    Auth Pages
                    <div><Link to='/register'>Register</Link></div>
                    <div><Link to='/login'>Login</Link></div>
                </div>
            </div>
        </div>
    )
}
