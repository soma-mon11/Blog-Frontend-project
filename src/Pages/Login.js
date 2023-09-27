import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom"
import { AuthContext } from '../Context/AuthContext';

function Login() {
  const [values1, setValues] = useState({
    email: '',
    password: ''
  })
  
  const navigate = useNavigate();
  const {login}=useContext(AuthContext)



  function handleInput(e) {

    setValues({ ...values1, [e.target.name]: e.target.value })

  }

  const handleSubmit = async (e) => {

    e.preventDefault();


    const { email, password } = values1;
    const res = await fetch("http://localhost:8000/login", {
      credentials: 'include',
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
    
      body: JSON.stringify(values1)

    })
    const data = await res.json();
    
    console.log(data)
    if (data.error) {
      alert(data.message)
    } else {
     alert(data.message)
     localStorage.setItem('token', data.token);
    
    login(values1)
      
      navigate('/')
    }
   
   }


  return (<>
    <div className='auth'>
      <h1>Login</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleInput} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" onChange={handleInput} />
        </Form.Group>
        <Button type="submit" onClick={handleSubmit}>Button</Button>
        <span>Not an user? <Link to="/register">Register</Link> </span>
      </Form>
    </div>

  </>)
}
export default Login