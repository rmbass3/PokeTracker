import React from "react";
import Col from 'react-bootstrap/Col'
import Tilty from 'react-tilty'

const CardGallery = ({cards}) => {

  console.log(cards)

  return cards.data.data.map((card) => (
    <Col>
      <Tilty
      >
        <div key={card.id} className="card-container mt-5 text-center">
          <img src={card.images.small} className="card-image" alt={card.name}/>
        </div>
      </Tilty>
    </Col>
  ))

}

export default CardGallery