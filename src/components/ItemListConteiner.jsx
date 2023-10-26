// importo Container de  bootstrap
import Container from 'react-bootstrap/Container';

// creo la props
export const ItemListConteiner = (props) => {
  return (
    <Container className='mt-3'>
      <h1>{props.greeting}</h1>  
    </Container> 
  )
} 