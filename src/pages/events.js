import React, { useState } from 'react';
import NavbarMenu from '../components/navbarEvents';
import Footer from '../components/footer';
import './events.css';


const cards = [
  { title: 'SEXTA', copy: '09/02', imageUrl: 'https://pbs.twimg.com/media/GFvktqVXsAAjKA6?format=jpg&name=medium'},
  { title: 'SÁBADO', copy: '10/02', imageUrl: 'https://pbs.twimg.com/media/GFvktqTXIAEKCsA?format=jpg&name=medium' },
  { title: 'DOMINGO',  copy: '11/02', imageUrl: 'https://pbs.twimg.com/media/GFvktqQWMAAfXBS?format=jpg&name=medium' },
  { title: 'SEGUNDA', copy: '12/02', imageUrl: 'https://pbs.twimg.com/media/GFvktqSW0AAxe_5?format=jpg&name=medium' },
  { title: 'TERÇA ', copy: '13/02', imageUrl: 'https://pbs.twimg.com/media/GFvkxaoXcAAkXy7?format=jpg&name=medium' }
];

const Card = ({ title, copy, imageUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="card" onClick={openModal}>
        <div className="content">
          <h2 className="title">{title}</h2>
          <p className="copy">{copy}</p>
        </div>
      </div>

      {isModalOpen && (
        <div className="image-modal" onClick={closeModal}>
          <button className="close-button" onClick={closeModal}>X</button>
          <img src={imageUrl} alt={title} className="modal-image" />
        </div>
      )}
    </>
  );
};

const Events = () => (
  <div>
    <NavbarMenu />

    <h1>CARNAVAL 2024</h1>

    
    <main className="page-content">
      {cards.map((card, index) => (
        <Card key={index} title={card.title} copy={card.copy} imageUrl={card.imageUrl} />
      ))}
    </main>

    <Footer />
  </div>
);

export default Events;
