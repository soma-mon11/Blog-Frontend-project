import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import DOMPurify from 'dompurify'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import moment from 'moment';
import { Alert, Col, Container, Row } from "react-bootstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Avatar } from '@mui/material';
import { AuthContext } from '../../Context/AuthContext';

export default function LabTabs() {
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [posts, setPosts] = React.useState([]);
 
  React.useEffect(() => {
    AOS.init();
  }, [])

  React.useEffect(() => {
    const fetchData = async (token) => {
      try {
        const queryParams = new URLSearchParams(window.location.search);
        const postCategory = queryParams.get('postCategory');

        const apiUrl = `http://localhost:8000/getposts${selectedCategory ? `?postCategory=${selectedCategory}` : ''}`;
        const res = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            // 'Content-type': 'application/json',
            'token':token
          }
        });

        const data = await res.json();
        console.log(data)
      // setPosts(data);
      if(data.err===true){
        localStorage.removeItem('token',token) 
        alert("token expired")
      }
      else{
        setPosts(data);
      }


      } catch (err) {
        console.log(err);
      }
    };
    const token=localStorage.getItem("token")
    fetchData(token);
  }, [selectedCategory]);

  const handleTabChange = (event, newValue) => {
    setSelectedCategory(newValue);
  };
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }} className="frontTab">
      <TabContext value={selectedCategory}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleTabChange} aria-label="lab API tabs example">
            <Tab  label="Art" value="Art" />
            <Tab  label="Science" value="science" />
            <Tab  label="Food" value="food" />
            <Tab  label="Cinema" value="Cinema" />
          </TabList>
        </Box>
        <div className="home">
          <div className="posts">
            {posts.map((post) => (
              <TabPanel key={post.writeid} value={selectedCategory}>
                <div className="post">
                  <div class="articles ">
                    <div data-aos="zoom-in" data-aos-duration="2000">

                      <Container>
                        <Row>
                          <Col lg="6">

                            <Link to={`/post/${post.writeid}`}>
                              <h5>{post.post_title}</h5>
                            </Link>
                            <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(truncateText(post.postWrite, 100)) }}></p><Link to={`/post/${post.writeid}`}>Read More</Link>
                            <Row style={{ padding: "3%" }}>
                              <Col lg='1'>
                                <Avatar className="Avatar" alt="Remy Sharp" src={`http://localhost:8000/${post.profile_photo}`} />
                              </Col>
                              <Col lg='1'>
                                <span>{post.user_name}</span>
                              </Col>
                            </Row>
                            <p style={{ color: "var(--bs-light-text-emphasis)" }}>Posted {moment(post.postDate).fromNow()}</p><br></br>
                          </Col>

                          <Col lg='6'>
                            <div className="img">
                              <Image src={`http://localhost:8000/${post.Photo_upload}`} alt="" />
                            </div>
                          </Col>
                        </Row>
                      </Container>
                    </div>
                  </div>
                </div>

              </TabPanel>

            ))}
          </div>

        </div>
      </TabContext>
    </Box>
  );
}