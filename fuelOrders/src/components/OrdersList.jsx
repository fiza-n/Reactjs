
import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOrders, updateOrderStatus } from "../features/orders/fuelOrdersSlice";

const OrdersList = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders);


  const handleStatusChange = (id) => {
    dispatch(updateOrderStatus({ id,customerName, status: "Delivered" }));
  };

  return (
    <div>
      <h2>Fuel Orders Dashboard</h2>

      {orders.map((order) => (
        <div
          key={order.id}
          style={{ border: "1px solid #ccc", padding: 10, marginBottom: 10 }}
        >
          <p><strong>Order ID:</strong> {order.id}</p>
          <p><strong>Customer's Name</strong>{order.customerName}</p>
          <p><strong>Status:</strong> {order.status}</p>
          <button onClick={() => handleStatusChange(order.id)}>
            Mark as Delivered
          </button>
        </div>
      ))}
    </div>
  );
};

export default OrdersList;
