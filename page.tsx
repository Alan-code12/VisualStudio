// pages/index.js
"use client"
import React, { useState } from 'react';
import Image from 'next/image';

// Array de eventos (rutas de ciclismo)
const events = [
  { id: 0, name: 'Ruta de montaña', category: 'Montaña', images: '/public/imagen/camiseta.jpg' },
  { id: 1, name: 'Ruta urbana', category: 'Urbana', images: '/public/imagen/pantalon.jpg' },
  { id: 3, name: 'ruta cemento', category: 'cemento', Image: '/public/imagen/zapatos.jpg'}
  // ...otros eventos
];

// Componente para mostrar un evento
const EventCard = ({ event }) => (
  <div className="event-card card" style={{ textAlign: 'center', background: 'linear-gradient(to bottom, #f0f0f0, #e0e0e0)', padding: '20px', marginBottom: '20px' }}>
    {/* Barra superior azul */}
    <div style={{ background: 'blue', height: '40px' }}></div>
    {/* Imagen del evento */}
    <Image src={`/image/${event.image}`} alt={event.name} width={30} height={20} />
    {/* Detalles del evento */}
    <div className="card-body">
      <h3 className="card-title">{event.name}</h3>
      <p className="card-text">Categoría: {event.category}</p>
      <button className="btn btn-primary" style={{ marginTop: '10px' }}>
        ¡Participar!
      </button>
    </div>
  </div>
);

// Página de inicio
const HomePage = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <div>
      {/* Menú flotante */}
      <div style={{ position: 'fixed', top: '30px', right: '10px', zIndex: 1000 }}>
        {menuVisible && (
          <div style={{ background: 'white', padding: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><button className="btn btn-secondary">Ingresar</button></li>
              <li><button className="btn btn-secondary">Categoría</button></li>
              <li><button className="btn btn-secondary">Ayuda</button></li>
              <li><button className="btn btn-secondary">Carrera</button></li>
            </ul>
          </div>
        )}
        <button className="btn btn-secondary" onClick={() => setMenuVisible(!menuVisible)}>
          ☰
        </button>
      </div>
      {/* Mapeo de eventos */}
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default HomePage;
