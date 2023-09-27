import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Model1 from './Model1';
import { AuthContext } from '../Context/AuthContext';
import CommentCard from './CommentCard';

function Comments(post) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {comment1}=useContext(AuthContext)
  console.log(post)
  console.log(comment1)
  
  return (

    <>
      <Button variant="primary" onClick={handleShow}>
        Comments({post ? comment1.length:0 })
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          {/* <Offcanvas.Title>Reviews()</Offcanvas.Title> */}

        </Offcanvas.Header>
        <Offcanvas.Body>
          <Model1 post={post}/>
          <br />
          <CommentCard/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Comments;