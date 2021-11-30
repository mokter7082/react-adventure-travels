import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import "./Addservice.css";

const Addservice = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    axios
      .post("https://infinite-lowlands-31268.herokuapp.com/addService", data)
      .then((res) => {
        console.log(res);
        if (res.status == 200) {
          alert("inset Success full");
          reset();
        }
      });
  };
  return (
    <div style={{ marginTop: "70px" }}>
      <h2 className="text-center text-success">Add New Service</h2>
      <div className="col-md-4 mx-auto add-service">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <input
            className="my-3"
            placeholder="Service Name"
            {...register("adName")}
          />

          {/* include validation with required or other standard HTML validation rules */}
          <input
            className=" w-100"
            placeholder="Ticket Price"
            {...register("ticketPrice", { required: true })}
          />
          <textarea
            className="my-3 w-100"
            placeholder="Service description"
            {...register("serviceDes", { required: true })}
          />
          <input
            className="my-3"
            placeholder="Image Url"
            {...register("img", { required: true })}
          />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}

          <input
            className="btn-success"
            type="submit"
            value="Add New Service"
          />
        </form>
      </div>
    </div>
  );
};

export default Addservice;
