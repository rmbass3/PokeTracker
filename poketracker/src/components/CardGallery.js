import React from "react";

import Col from 'react-bootstrap/Col'


const CardGallery = ({cards}) => {

  console.log(cards)

  return cards.data.data.map((card) => (
    <Col>
      <div key={card.id} className="card-container mt-5 text-center">
        <img src={card.images.small} className="card-image" alt={card.name}/>
      </div>
    </Col>
  ))

}

export default CardGallery