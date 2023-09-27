import { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import img from '../Images/google.png'
import img2 from '../Images/facebook.png'
import img3 from '../Images/gmail.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import moment from 'moment';
function Model1(post) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => { setShow(true) };

  const [values1, setValues] = useState({
    email: '',
    password: ''
  })

  const [comment, Setcomment] = useState({
    writeComment: ""

  })

  const { currentUser, comment1 } = useContext(AuthContext)



  function handleInput(e) {

    setValues({ ...values1, [e.target.name]: e.target.value })
    Setcomment({ ...comment, writeComment: e.target.value })


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
      body: JSON.stringify({ email, password })

    })
    const data = await res.json();

    if (data.error) {
      alert(data.message)
    } else {
      alert(data.message)

    }

  }
  const HandleComment = async (e) => {
    e.preventDefault()
    const { writeComment } = comment;
    const Comment_date = moment(Date.now()).format("YYYY-MM-DD HH:mm:ss");
    const user_id = currentUser.user_id;

    const res = await fetch("http://localhost:8000/postcoment", {
      credentials: 'include',
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ writeComment, Comment_date, user_id })
    })
    const data = await res.json();
    if (data) {

      alert(data.message);
    } else {
      alert("Error posting comment");
    }

  }
  
  

  return (
    <>

      <h2>Reviews({currentUser ? comment1.length : 0})</h2>
      <Col lg={12} md={12} sm={12} xs={12}>
        
        <FloatingLabel
          controlId="floatingTextarea"
          label="comment here"
          className="mb-3" >
          <Form.Control as="textarea" placeholder="Leave a comment here" onClick={currentUser.user_name? null :handleShow} value={comment.writeComment} onChange={handleInput} />
        </FloatingLabel>


      </Col>
      <Col lg={6} md={12} sm={12} xs={12}>
        <Button type="submit" className="send-button" onClick={HandleComment}>
          Send
        </Button>
      </Col>



      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Create an account to write a response.</Modal.Title>
        </Modal.Header>
        <Modal.Body><p>Build on this story’s ideas with your own – responses keep the
          conversation moving.</p>
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
              <Button type="submit" onClick={handleSubmit}>Login</Button>

            </Form>
          </div>


        </Modal.Body>
        <Modal.Footer>
          <span> New user? <Link to="/register">Register</Link> </span>

        </Modal.Footer>
      </Modal>

    </>
  );
}

export default Model1;