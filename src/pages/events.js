import React, { useState } from 'react';
import NavbarMenu from '../components/navbarEvents';
import Footer from '../components/footer';
import './events.css';

const cards = [
  { title: 'Quarta', copy: 'teste', imageUrl: 'https://mangaonline.biz/wp-content/uploads/2024/01/19.png'},
  { title: 'Quinta', copy: 'teste', imageUrl: '' },
  { title: 'Sexta',  copy: 'teste', imageUrl: '' },
  { title: 'Sabado', copy: 'teste', imageUrl: '' }
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

const PageContent = () => (
  <main className="page-content">
    {cards.map((card, index) => (
      <Card key={index} title={card.title} copy={card.copy} imageUrl={card.imageUrl} />
    ))}
  </main>
);

const Events = () => (
  <div>
    <NavbarMenu />
    <PageContent />
    <Footer />
  </div>
);

export default Events;
