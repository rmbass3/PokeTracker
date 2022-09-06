import React from "react";
import Col from 'react-bootstrap/Col'
import Tilty from 'react-tilty'
import '../styles/CardGallery.css'

const CardGallery = ({cards, handleShow}) => {

  console.log(cards)

  return cards.data.data.map((card) => (
    <Col>
      <Tilty>
        <div key={card.id} className="card-container mt-5 text-center">
          <img 
            src={card.images.small} 
            className="card-image" 
            alt={card.name}
            onClick={handleShow}
          />
        </div>
      </Tilty>
    </Col>
  ))

}

export default CardGallery