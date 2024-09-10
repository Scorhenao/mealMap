import React, { useEffect, useState } from 'react';

const Menu = () => {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

useEffect(() => {
    // Función para obtener los datos del menú
    const fetchMenu = async () => {
        try {
            const response = await fetch('http://localhost:3000/menu'); // Cambia la URL según sea necesario
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setMenu(data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    fetchMenu();
  }, []); // El array vacío indica que el efecto se ejecutará solo una vez

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

return (
    <div>
        <h1>Today's Menu</h1>
        <ul>
            {menu.map((dish, index) => (
                <li key={index}>{dish.name}</li>
            ))}
        </ul>
    </div>
);
};

export default Menu;