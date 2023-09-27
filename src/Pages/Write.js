import { Container, Row, Col } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import React, { useContext, useState } from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import Dropdown from 'react-bootstrap/Dropdown';
import { AuthContext } from '../Context/AuthContext';
import { useLocation } from 'react-router-dom';
import moment from 'moment';

function Write() {

    const state = useLocation().state || "";
     const [value1, setValue] = useState(state ? state.postWrite : '');
    const { currentUser } = useContext(AuthContext)

    const [write, setWrite] = useState({
        post_title: state ? state.post_title : '',
        Photo_upload: state ? state.Photo_upload : ''
        // postCategory: state ? 'postCategory' : '',

    })

    function handleInput(e) {
        const { name, value, files } = e.target;
        setWrite({ ...write, [name]: files ? files[0] : value });
    }
    function handleCategory(category) {
        setWrite({ ...write, postCategory: category });
    }

    const HandleClick = async (e) => {
        e.preventDefault();
        const postDate = moment(Date.now()).format("YYYY-MM-DD");

        const user_id = currentUser.user_id;
       


        try { 
            const form = new FormData();
            form.append('post_title', write.post_title);
            form.append('postWrite', value1);
            form.append('Photo_upload', write.Photo_upload);
            form.append('postCategory', write.postCategory);
            form.append('postDate', postDate);
            form.append('user_id', user_id);
            form.append('writeid',state.writeid)

            
            const response = state
                ?   await fetch(`http://localhost:8000/write?edit=${state.writeid}`, {
                    method: 'PUT',
                    body: form,
                  })
                :   await fetch('http://localhost:8000/write', {
                    method: 'POST',
                    body: form,
                  })
                  console.log(response)
    
            if (response.ok) {
                // Handle success if needed
                console.log('Post created/updated successfully');

                alert("updated successfully")
                setWrite("")
            } else {
                // Handle error if needed
                alert('Error creating/updating the post');
            }
         } catch (error) {
            console.log(error);
            alert('An error occurred while submitting the form.');    
            alert ("ERROR")
        }
        //   try {

        //     const apiUrl = "http://localhost:8000/editUser"
        //     const res = await fetch(apiUrl, {
        //         method: "PUT",
        //         credentials: 'include',
        //         headers: {
        //             "Content-type": "application/json"
        //         },
        //         body: JSON.stringify({
        //             writeid: writeid,
        //             post_title: "",
        //             postWrite: "",
        //             postCategory: ""
        //         }),
        //     });
        //     console.log(res)
        //     if (res.ok) {
        //         alert("Your post is EDITED");

        //     } else {
        //         alert("Your Post Is not EDITED");
        //     }



        // } catch (err) {
        //     console.log(err);
        // }
    };
    

    return (<>
    
        <Container className='add'>
            <h2>
                Write Your Own And Boost Your Knowledge
            </h2>
            <Row>
                <Col lg="7" style={{paddingBottom:"15%"}}>
                    <input type='text' placeholder='Title' name="post_title" value={write.post_title} onChange={handleInput}></input>
                    <div className='editorContainer'>
                        <ReactQuill className='editor' theme="snow" value={value1} onChange={setValue} />
                    </div>
                </Col>
                <Col lg="3">
                    <Card>

                        <Card.Body>
                            <Card.Title><h3>PUBLISH</h3></Card.Title>

                            <Card.Text>
                                status:Draft<br></br>
                                Visibility:Public<br></br>

                                <input type='file' name="Photo_upload" onChange={handleInput} />
                            </Card.Text>
                            <Dropdown>

                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                  {write.postCategory? write.postCategory:"Select Your Category"}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => handleCategory("Art")}>Art</Dropdown.Item>
                                    <Dropdown.Item onClick={() => handleCategory("Science")} >Science</Dropdown.Item>
                                    <Dropdown.Item onClick={() => handleCategory("Cinema")}>Cinema</Dropdown.Item>
                                    <Dropdown.Item onClick={() => handleCategory("Food")}>Food</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown><br></br>

                            <Button variant="primary" onClick={HandleClick}>Publish</Button>
                        </Card.Body>
                    </Card>

                </Col>

            </Row>
        </Container>
       
    </>)
}
export default Write
