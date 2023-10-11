import React from 'react'
import {Routes,Route} from 'react-router-dom';
import { Login } from '../components/Login';
import { Layout } from '../components/Layout';
import { Register } from '../components/Register';
import { UnAutherised } from '../components/UnAutherised';
import { Missing } from '../components/Missing';
import { Admin } from '../components/Admin';
import { Library } from '../components/Library';
import { Manager } from '../components/Manager';
import { Home } from '../components/Home';
import { Linkpage } from '../components/Linkpage';
import { RequireLogin } from '../components/RequireLogin';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        {/* public routes */}
        <Route path='login' element={<Login/>}></Route>
        <Route path='register' element={<Register/>}/>
        <Route path='unautherised' element={<UnAutherised/>}/>
        <Route path='linkpage' element={<Linkpage/> } />

        {/* protected roues */}
        <Route element={<RequireLogin roles={['admin']}/>}>
        <Route path='admin' element={<Admin/>} />
        </Route>
        <Route element={<RequireLogin roles={['manager']}/>}>
        <Route path='manager' element={<Manager/>} />
        </Route>
        <Route element={<RequireLogin roles={['admin','manager']}/>}>
        <Route path='library' element={<Library/>} />
        </Route>
        <Route element={<RequireLogin roles={['user','admin','manager']}/>}>
        <Route path='/' element={<Home/> } />
        </Route>

        {/* catch all  */}
        <Route path='*' element={<Missing/>}/>

      </Route>
    </Routes>
  )
}
