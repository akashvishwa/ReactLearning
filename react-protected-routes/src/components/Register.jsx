import React, { useContext, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { UserContext } from '../contexts/Contexts';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
  const [user, setUser] = useState();
  const [error,setError]=useState();
  const {users, setUsers} = useContext(UserContext);
  const navigate=useNavigate();

  const handleFormChange = (e) => {
    let tempUser = { ...user };
    tempUser[e.target.name] = e.target.value;
    console.log(tempUser);
    setUser(tempUser);
  }
  const validations = () => {
    if(user?.password === user?.confirmpassword){
      return true;
    }else{
      setError('password does not match');
    }
    return false;
  }
  const handleRegister = (e) => {
    e.preventDefault();
    if (validations()) {
      setUsers([...users,{...user,id:Date.now(),role:'user'}]);
      navigate('/login',{replace:true});
    }
  }

  return (
    <div>
      <h4>Register</h4>
      <div style={{color:'red'}}>{error}</div>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="name@example.com" onChange={(e) => handleFormChange(e)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
          <Form.Label>Name</Form.Label>
          <Form.Control type='text' name='name' rows={3} onChange={(e) => handleFormChange(e)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Password</Form.Label>
          <Form.Control type='text' name='password' rows={3} onChange={(e) => handleFormChange(e)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type='password' name='confirmpassword' rows={3} onChange={(e) => handleFormChange(e)} />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={(e) => handleRegister(e)}>
          Submit
        </Button>
      </Form>
    </div>
  )
}
