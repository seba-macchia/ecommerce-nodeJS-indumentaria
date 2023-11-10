// importo el item
import { Item } from "./Item";
import { Container, Row, Col } from 'react-bootstrap';

export const ItemList = ({ items }) => {
  return (
    <Container>
      <Row>
        {items.map((item) => (
          <Col key={item.id} xs={12} sm={6} md={3}>
            <Item item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};