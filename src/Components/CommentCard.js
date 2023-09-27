import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

function CommentCard() {
  const [comment1, setComment1] = useState([])

  useEffect(() => {
    const token=localStorage.getItem('token')
    fetchComment(token)
  }, [])

  const fetchComment = async (token) => {

    const res = await fetch("http://localhost:8000/getcomment", {
      credentials: 'include',
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "token":token
      },

    })
    const data = await res.json();
    console.log(data)

    setComment1(data.data)
  }
  console.log(comment1.data)



  return (<>
  
    <div className="comment-container">
      {comment1.map((index) => (
        
          <Card style={{ width: '18rem' }} key={index.Comment_id}>
            <Card.Body className="comment-body"> 
            <div className="user-info">
              <div className="profile-photo">
                <Image src={`http://localhost:8000/${index.profile_photo}`} roundedCircle />
              </div>
              <div className="user-details">
              <Card.Subtitle className="user-name ">{index.user_name}</Card.Subtitle>
              <Card.Text className="comment-text">
                {index.writeComment}
              </Card.Text>
              </div>
              </div>
              <Card.Text className="comment-date">{index.Comment_date}</Card.Text>


            </Card.Body>
          </Card>
        
      ))}
    </div>
  </>
  );
}

export default CommentCard;