// importo tarjeta y boton de bootstrap
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export const Item = ({item}) => {
  return (
    <Card style={{ width: '100%', textAlign:'center', height: '100%'}}>
      <Card.Img variant="top" src={item.pictureUrl} style={{height: '50%', objectFit: 'cover'}} />
      <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <Card.Title style={{textAlign: 'center'}}>{item.title}</Card.Title>
        <Link to={`/items/${item.id}`}>
          <Button variant="primary">Ver Detalle</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}