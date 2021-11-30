import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth";

const Myorder = () => {
  const [order, setOrder] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch(
      `https://infinite-lowlands-31268.herokuapp.com/palceOrder/${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);
  //delete
  const handleDelete = (id) => {
    const proced = window.confirm("are you sure");
    if (proced) {
      fetch(`https://infinite-lowlands-31268.herokuapp.com/deleteOrder/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("Delete Success");
            const remaingProduct = order.filter((od) => od._id !== id);
            setOrder(remaingProduct);
          }
        });
    }
  };
  return (
    <div style={{ marginTop: "70px" }}>
      <div className="">
        <h1>Total Order {order?.length}</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Email</th>
              <th>Email</th>
              <th>Shipping Address</th>
              <th>Shipping Mobile</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          {order?.map((pd, index) => (
            <tbody>
              <tr>
                <td>{index}</td>
                <td>{pd?.userName}</td>
                <td>{pd?.userEmail}</td>
                <td>{pd?.serviceName}</td>
                <td>{pd?.ticketPrice}</td>
                <td>{pd?.shipingAddress}</td>
                <td>{pd?.mobile}</td>
                <td>{pd?.status}</td>
                <button
                  onClick={() => handleDelete(pd._id)}
                  className="btn bg-danger p-2 my-1"
                >
                  Delete
                </button>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </div>
  );
};

export default Myorder;
