import React from "react";
import Col from 'react-bootstrap/Col'
import Tilty from 'react-tilty'
import '../styles/CardGallery.css'

const CardGallery = ({cards, handleShow}) => {

  //console.log(cards)

  return cards.data.data.map((card, index) => (
    <Col key={card.id}>
      <Tilty>
        <div className="card-container mt-5 text-center">
          <img 
            src={card.images.small}
            className="card-image"
            alt={card.name}
            onClick={() => handleShow(card)}
          />
        </div>
      </Tilty>
    </Col>
  ))

}

export default CardGallery