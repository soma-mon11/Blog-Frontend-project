import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import Dropdown from 'react-bootstrap/Dropdown';

function Addmenu() {

    return (
        <>
            <Card style={{ width: '18rem' }}>

                <Card.Body>
                    <Card.Title><h3>PUBLISH</h3></Card.Title>

                    <Card.Text>
                        status:Draft<br></br>
                        Visibility:Public<br></br>
                        uploaded image
                    </Card.Text>
                    <Dropdown>

                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Select Your interest
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Art</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Science</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Technology</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Cenima</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Food</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown><br></br>


                    <Button variant="primary">Publish</Button>


                </Card.Body>
            </Card>

        </>
    );
}

export default Addmenu;