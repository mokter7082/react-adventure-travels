import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = ({ services }) => {
  console.log(services);
  const { _id, adName, ticketPrice, serviceDes, img } = services;
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{adName}</Card.Title>
          <Card.Title>Ticket price: {ticketPrice}TK</Card.Title>
          <Card.Text>{serviceDes.slice(0, 130)}</Card.Text>
        </Card.Body>
        <Link to={`/booking/${_id}`}>
          <button className="btn btn-primary">Booking Now</button>
        </Link>
      </Card>
    </Col>
  );
};

export default Service;
