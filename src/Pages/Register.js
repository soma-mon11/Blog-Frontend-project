import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Register() {
  const [feild, setFeild] = useState({
    user_name: "",
    email: "",
    password: "",
    profile_photo:null
  });
  const navigate = useNavigate();

  function handleSubmitR(e) {
    const { name, value, files } = e.target;
    if (name === 'profile_photo') {
      setFeild({ ...feild, [name]: files[0] });
    } else {
      setFeild({ ...feild, [name]: value });
    }
  }
   
  

  const HandleClick = async (e) => {
    e.preventDefault();

   
      const form = new FormData();
      form.append('user_name', feild.user_name);
      form.append('email',feild.email);
      form.append('password', feild.password);
      form.append('profile_photo', feild.profile_photo);
     

    const res = await fetch("http://localhost:8000/register", {
      method: "POST",
      credentials: 'include',
      // headers: {
      //   "Content-type": "application/json",
      // },
    
      body: form
    });
    const data = await res.json();
    console.log(data);
    if (!feild.user_name || !feild.password || !feild.email || !feild.profile_photo) {
      alert("Please fill all the feilds");
    } else if (res.ok) {
      alert("fillup sucessful");
      navigate("/");
    }
    // alert("fillup is successful")
    // navigate('/login')
    else {
      alert("you are already an user");
    }
  };

  return (
    <>
      <div className="auth">
        <h1>Register</h1>
        <Form>
          
          <Form.Group className="mb-3" controlId="formGroupProfilePhoto">
            <Form.Label>Profile Photo</Form.Label>
            <Form.Control
              type="file"
              name="profile_photo"
              // value={feild.profile_photo}
              onChange={handleSubmitR}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              name="user_name"
              value={feild.user_name}
              onChange={handleSubmitR}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={feild.email}
              onChange={handleSubmitR}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              name="password"
              value={feild.password}
              onChange={handleSubmitR}
            />
          </Form.Group>
          <Button type="submit" onClick={HandleClick}>
            Button
          </Button>
          <span>
            Already an user? <Link to="/login">Login</Link>{" "}
          </span>
        </Form>
      </div>
    </>
  );
}
export default Register;
