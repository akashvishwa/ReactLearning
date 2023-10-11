import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { UserContext } from '../contexts/Contexts';
import { useAuth } from '../hooks/useAuth';
import {Link,useNavigate,useLocation} from 'react-router-dom';

export const Login = () => {
  const {users,setUsers}=useContext(UserContext);
  const {auth}=useAuth();
  const navigate=useNavigate();
  const location=useLocation();
  const from=location?.state?.from?.pathname||'/';

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  console.log(email,password)
  const handleLogin=(e)=>{
    e.preventDefault();
    console.log(users,from)
    let user=users.filter(x=>x.email===email&&x.password===password)[0];
    if(user){
      auth.setLogin(user);
      navigate(from,{replace:true});
    }else{
      alert("wrong user name and password!");
    }

  }

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}}/>
          <Form.Text  className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={(e)=>handleLogin(e)}>
          Submit
        </Button>
      </Form>
    </div>
  )
}
