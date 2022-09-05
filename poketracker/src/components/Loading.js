import React from "react";
import Spinner from 'react-bootstrap/Spinner'


const Loading = () => {
  
  return (
    <div id="loading" className="loading">
      <Spinner animation="border" variant="light">
        <span className="visually-hidden text-light">Loading...</span>
      </Spinner>
    </div>
  )
}

export default Loading