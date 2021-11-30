import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://infinite-lowlands-31268.herokuapp.com/allServices")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h1 className="text-center text-success my-4">Servicess</h1>
      <Row xs={1} md={4} className="g-4">
        {services.map((service) => (
          <Service key={service._id} services={service}></Service>
        ))}
      </Row>
    </div>
  );
};

export default Services;
