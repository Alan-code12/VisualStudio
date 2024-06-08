// pages/index.tsx
"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { Event } from './types'; // Ajusta la ruta según la ubicación de tu archivo types.ts

// Array de eventos (rutas de ciclismo)
const events: Event[] = [
  { id: 0, name: 'Ruta de montaña', category: 'Montaña', image: '/ciclismo.2.jpg' },
  { id: 1, name: 'Ruta urbana', category: 'Urbana', image: '/ciclismo.3.jpg' },
  { id: 2, name: 'Ruta carretera', category: 'Carretera', image: '/ciclismo4.jpg' }
  // ...otros eventos
];

// Componente para mostrar un evento
const EventCard = ({ event }: { event: Event }) => (
  <div className="event-card card" style={{ textAlign: 'center', background: 'linear-gradient(to bottom, #f0f0f0, #e0e0e0)', padding: '20px', marginBottom: '20px' }}>
    {/* Barra superior azul */}
    <div style={{ background: 'blue', height: '40px' }}></div>
    {/* Imagen del evento */}
    <Image src={event.image} alt={event.name} width={500} height={300} />
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
