
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from "react";
import DOMPurify from 'dompurify'

import UserProfile from "../Components/profie";
import HomeCarosol from "../Components/HomeCarosol";
import Image from 'react-bootstrap/Image';
import img1 from '../../src/Images/frontview.png'

import { Col, Container, Row } from "react-bootstrap";
import Trending from "../Components/Trending";
import Tab1 from "../Components/tab/Tab1";
import Typewriter from 'typewriter-effect';

function Home() {
    const [posts, setPosts] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            try {

                const queryParams = new URLSearchParams(window.location.search);
                const postCategory = queryParams.get('postCategory');

                const apiUrl = `http://localhost:8000/getposts${postCategory ? `?postCategory=${postCategory}` : ''}`;
                const res = await fetch(apiUrl, {
                    method: "GET",

                    headers: {
                        "Content-type": "application/json"
                    }
                });

                const data = await res.json();
                setPosts(data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);
    // const truncateText = (text, maxLength) => {
    //     if (text.length > maxLength) {
    //         return text.substring(0, maxLength) + '...';
    //     }
    //     return text;
    // };

    return (<>


        <div class="container_home">
            <Image src={img1} fluid ></Image>
          
            <Container>
                <Row>
                    <Col>
                      <h2> <Typewriter
                            options={{
                                strings: ['Discover stories, thinking,and expertise from writers on any topic.', 'Everyone has a story to tell.','Anyone can share insightful perspectives, useful knowledge, and life wisdom with the world'],
                                autoStart: true,
                                loop: true,
                            }}
                        /></h2>  
                        {/* <h2 >Discover stories, thinking, <br></br>and expertise from writers on any topic.</h2> */}
                    </Col>
                </Row>
            </Container>

        </div>
        <div className="HomeTrends">
            {/* <Trending />
            <br></br> */}
            <Container >
                <Row>
                    <Col>
                        <Tab1 />
                    </Col>
                </Row>
            </Container>
        </div>


        {/* <Container>
            <Row>
            <Col>
                <div className="home">
                    <div className="posts">
                        {posts.map((post) => (
                            <>
                                <div className="post" key={post.writeid}>
                                    <div className="img">
                                       
                                        <Image src={`http://localhost:8000/${post.Photo_upload}`} thumbnail />
                                    </div>


                                    <div className="content" >
                                        <Link to={`/post/${post.writeid}`}>
                                            <h1>
                                                {post.post_title}
                                            </h1>
                                        </Link>

                                        <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(truncateText(post.postWrite, 300)) }}></p>

                                        <Button ><Link to={`/post/${post.writeid}`}>Read More </Link></Button>

                                    </div>
                                </div>

                            </>
                        ))}

                    </div>
                </div>



            </Col>
        </Row>
        </Container> */}


    </>)
}
export default Home