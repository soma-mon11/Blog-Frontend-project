import { Container, Row, Col } from "react-bootstrap"

import { Link, useNavigate } from "react-router-dom"
import img2 from '../Images/man.jpg'
import del from '../Images/bin.png'
import edit from '../Images/edit.png'
import Menu from "../Components/Menu"
import { useContext, useEffect, useState } from "react";
import moment from "moment/moment"
import { AuthContext } from "../Context/AuthContext"
import { useParams } from "react-router-dom";
import Comments from "../Components/Comments"
import DOMPurify from 'dompurify'
import UserProfile from "../Components/profie"
import Image from 'react-bootstrap/Image';



function SinglePost() {
    const [post, setPost] = useState([])

    const navigate = useNavigate()
    const { writeid } = useParams();
    const { currentUser } = useContext(AuthContext)

    useEffect(() => {
        const fetchData = async (token) => {
            try {

                const apiUrl = `http://localhost:8000/getpost/${writeid}`;
                const res = await fetch(apiUrl, {
                    method: "GET",
                    headers: {
                        "Content-type": "application/json",
                        'token':token
                    }
                });
                console.log(res)

                const data = await res.json();
                console.log(data)
                

                setPost(data);
            } catch (err) {
                console.log(err);
            }
        };
        const token= localStorage.getItem("token")
        fetchData(token);
    }, [writeid]);




    const handleDelete = async (token) => {

        try {

            const apiUrl = `http://localhost:8000/deleteUser?writeid=${writeid}`;
            const res = await fetch(apiUrl, {
                method: "DELETE",
                credentials: 'include',
                headers: {
                    "Content-type": "application/json",
                    "token":token
                }
            });
            if (res.ok) {
                alert("Your post is deleted");
                navigate('/');
            } else {
                alert("Your Post Is not Deleted");
            }
        } catch (err) {
            console.log(err);
        }

    }
    console.log(post)
    return (<>
        <Container className="postpage" >
            <Row>
                <Col lg="8">
                    <div><h1></h1></div>
                   {post.map((post)=>(
                    <div key={post.writeid}>
                             <Image src={`http://localhost:8000/${post.Photo_upload}`} fluid />
                    {/* <img src={`http://localhost:8000/${post.Photo_upload}`} alt="" style={{ width: "100%" }} /> */}
                    <div className="user">
                        
                        <UserProfile post={post}/>
                        <div className="info">
                            <span>{post.user_name}</span>
                            <p>Posted {moment(post.postDate).fromNow()}</p>
                            <Comments post={post} />
                        </div>
                        {currentUser.user_name === post.user_name && (
                            <div className="edit">
                                <Link to={`/write?edit=${post.writeid}`} state={post}>
                                    <img src={edit} alt="" ></img></Link>
                                <img onClick={handleDelete} src={del} alt="" />
                            </div>)}


                    </div>
                    <div style={{ textAlign: "center"}}><h1> {post.post_title} </h1></div>
                    <div   > <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.postWrite) }}></p></div>



                    </div>

                   ))}
                {/* <Image src={`http://localhost:8000/${post.Photo_upload}`} fluid />
                    
                    <div className="user">
                        
                        <UserProfile post={post}/>
                        <div className="info">
                            <span>{post.user_name}</span>
                            <p>Posted {moment(post.postDate).fromNow()}</p>
                            <Comments post={post} />
                        </div>
                        {currentUser.user_name === post.user_name && (
                            <div className="edit">
                                <Link to={`/write?edit=${post.writeid}`} state={post}>
                                    <img src={edit} alt="" ></img></Link>
                                <img onClick={handleDelete} src={del} alt="" />
                            </div>)}


                    </div>
                    <div style={{ textAlign: "center"}}><h1> {post.post_title} </h1></div>
                    <div   > <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.postWrite) }}></p></div> */}


                </Col>
                <Col lg="4">

                    <Menu post={post[0]}/>
                </Col>

            </Row>
        </Container>
    </>)
}
export default SinglePost