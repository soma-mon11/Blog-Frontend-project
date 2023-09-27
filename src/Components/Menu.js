import { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useParams } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
function Menu(post) {
    const [posts, setPosts] = useState([])
  
   useEffect(() => {
        const fetchData = async (token) => {
            try {
              const apiUrl = `http://localhost:8000/getposts`
                const res = await fetch(apiUrl, {
                    method: "GET",
                    headers: {
                        "Content-type": "application/json",
                        "token":token
                    }
                });

                const data = await res.json();
                console.log(data)

             setPosts(data);
 
            } catch (err) {
                console.log(err);
            }
        };
        const token=localStorage.getItem("token")
        fetchData(token);
    }, []);
    

console.log(post)
console.log(posts)


return (
    <>
        <div className='menu'>
            <h1 className='menu'>Other Posts You May Like</h1>
        </div>

        {posts.map((item) => (
           
           item.user_id ? (
                <Card style={{ width: '18rem', marginTop: "10px" }} className='menu' key={item.writeid}>
                    <div className='menu1'>
                    <Link to={`/post/${item.writeid}`}> <Card.Img variant="top" src={`http://localhost:8000/${item.Photo_upload}`} />
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                        </Link>
                    </div>
                </Card>
                 ) : null
            
        ))}
    </>
);
            }
export default Menu