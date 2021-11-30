import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Service from "../Service/Service";
import "./Collection.css";

const Collection = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://infinite-lowlands-31268.herokuapp.com/allServices")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="collection">
      <h1 className="text-success text-center my-4">
        Travels Service Collection
      </h1>
      <Row xs={1} md={4} className="g-4">
        {services.map((service) => (
          <Service key={service._id} services={service}></Service>
        ))}
      </Row>
    </div>
  );
};

export default Collection;
