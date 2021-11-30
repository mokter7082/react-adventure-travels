import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../../Hooks/useAuth";

const Booking = () => {
  const { id } = useParams();
  const [service, setService] = useState();
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetch(`https://infinite-lowlands-31268.herokuapp.com/service/${id}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  const onSubmit = (data) => {
    data.userName = user?.displayName;
    data.userEmail = user?.email;
    data.serviceName = service?.adName;
    data.ticketPrice = service?.ticketPrice;
    data.status = "pending";
    fetch("https://infinite-lowlands-31268.herokuapp.com/placeOrder", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("insert Success");
          reset();
        }
      });
  };
  return (
    <div style={{ marginTop: "70px" }}>
      <div className="col-md-6 mx-auto">
        <img src={service?.img} alt="" />
        <h2>{service?.adName}</h2>
        <p style={{ color: "gray" }}>Description: {service?.serviceDes}</p>
        <h3>Price: {service?.ticketPrice} TK</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <input
            placeholder="Shiping Address"
            {...register("shipingAddress")}
          />{" "}
          <br />
          {/* include validation with required or other standard HTML validation rules */}
          <input
            className="my-2"
            placeholder="mobile Number"
            {...register("mobile", { required: true })}
          />{" "}
          <br />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}
          <input type="submit" value="place order" />
        </form>
      </div>
    </div>
  );
};

export default Booking;
