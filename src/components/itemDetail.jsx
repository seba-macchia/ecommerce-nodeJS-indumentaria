export const ItemDetail = ({ item }) => {
  const containerStyle = {
    border: '1px solid #ccc', // Solo para visualizar el contenedor
    padding: '20px', // Agrega espacio interno para separar el contenido del borde
    margin: 'auto', // Centra el contenedor horizontalmente
    maxWidth: '350px', // Establece un ancho máximo para evitar que el contenedor sea excesivamente ancho
  };

  const titleStyle = {
    fontSize: '20px', // Establece un tamaño de fuente más pequeño para el título
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={containerStyle}>
        <h1 style={titleStyle}>{item.title}</h1>
        <img src={item.pictureUrl} alt={item.title} style={{ maxWidth: '100%', height: 'auto' }} />
        <p style={{ fontSize: '14px' }}>{item.description}</p>
        <p style={{ fontSize: '12px', textAlign: 'center' }}>PRECIO: ${item.price}</p>
      </div>
    </div>
  );
};
