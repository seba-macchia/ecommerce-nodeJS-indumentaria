// importo lo necesario para realizar el filtrado y lo requerido en la pre-entrega
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { ItemList } from './ItemList';
import { 
  getFirestore,
  collection,
  getDocs,
  query,
  where
} from "firebase/firestore";

export const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const refCollection = !id
      ? collection(db, 'items')
      : query(collection(db, 'items'), where('categoryId', '==', id));

    getDocs(refCollection).then((snapshot) => {
      if (snapshot.size === 0) 
        console.log('No results');
      else 
        setItems(
          snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
    }); 
  }, [id]);

  const greeting = id ? `${id}` : props.greeting;

  return (
    <Container className="mt-4">
      <h1 className="display-5">
        {greeting}
      </h1>
      {items.length > 0 ? <ItemList items={items} /> : <>Loading...</>}
    </Container>
  );
};