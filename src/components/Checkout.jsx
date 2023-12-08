import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import {
  getFirestore,
  collection,
  addDoc,
  getDoc,
  updateDoc,
  doc,
} from "firebase/firestore";

const valoresIniciales = {
  name: "",
  email: "",
  confirmEmail: "",
  phone: "",
};

const Checkout = ({sumaTotal, clear, items}) => {
  const [buyer, setBuyer] = useState(valoresIniciales);
  const [validEmail, setValidEmail] =useState(true);
  const [emailMatch, setEmailMatch] = useState(true);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const {name, value} = event.target;
    setBuyer((prevBuyer) => ({
      ...prevBuyer,
      [name]: value,
    }));

    if (name === "email" || name === "confirmEmail") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setValidEmail(emailRegex.test(value));
      if (name === "confirmEmail") {
        setEmailMatch(value === buyer.email);
      }
    }
  };

  const sendOrder = async () => {
    if (!validEmail || !emailMatch || !buyer.name || !buyer.phone) {
      Swal.fire({
        title: 'Verificación Necesaria',
        text: 'Por favor, verifique sus campos. Recuerde que todos los campos deben estar completos y verifique que el correo electrónico sea válido.',
        icon: 'warning',
        confirmButtonText: 'Aceptar'
      });
      return;
  }
  const db = getFirestore();
  const ordersCollection = collection(db, "orders");

  try{
    const orderRef = await addDoc(ordersCollection, {
      buyer,
      items,
      sumaTotal,
      fecha: new Date(),
    });

    for (const item of items) {
      const itemRef = doc(db, "items", item.id);
      const itemDoc = await getDoc(itemRef);

      if (itemDoc.exists()) {
        const stock = itemDoc.data().stock - item.quantity;
        await updateDoc(itemRef, { stock });

      } else{
        console.log(`No se encontró un item con id ${item.id}`);
      }
    }
    Swal.fire({
      title: 'Orden Completada',
      text: `Su orden ${orderRef.id} ha sido completada`,
      icon: 'success',
      confirmButtonText: 'Ok'
    })
    setBuyer(valoresIniciales);
    clear();
    navigate("/");
  }catch (error){
    console.error("Error al enviar la orden:", error);
  }
  };

  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formEmail">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={buyer.name}
            placeholder="Ingrese su Nombre"
            onChange={handleChange}
            required
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formEmail">
            <Form.Label>Correo</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={buyer.email}
              onChange={handleChange}
              placeholder="Ingrese su correo"
              required
              isInvalid={!validEmail}
            />
            <Form.Control.Feedback type="invalid">
              El correo ingresado no es valido
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} controlId="formConfirmEmail">
          <Form.Label>Confirmar Correo</Form.Label>
          <Form.Control
            type="email"
            value={buyer.confirmEmail}
            onChange={handleChange}
            name="confirmEmail"
            placeholder="Confirme su correo"
            required
            isInvalid={!emailMatch}
          />
          <Form.Control.Feedback type="invalid">
            Los correos electrónicos no coinciden.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formPhone">
          <Form.Label>Telefono</Form.Label>
          <Form.Control
            type="tel"
            name="phone"
            value={buyer.phone}
            onChange={handleChange}
            placeholder="Ingrese su telefono"
            required
          />
        </Form.Group>
      </Row>
    <Button variant="primary" onClick={sendOrder}>
      Realizar Compra 
    </Button>
    </Form>
  );
};

export default Checkout;
