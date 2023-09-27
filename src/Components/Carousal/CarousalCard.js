import Card from 'react-bootstrap/Card';
function CarousalCard(prop) {
  return (
    <Card>
      <Card.Body>

            <img src={prop.img} style={{width:"100%"}} ></img>
        
      </Card.Body>
    </Card>
  );
}

export default CarousalCard;