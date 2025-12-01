import { useState } from 'react';
import {addOrders} from '../features/orders/fuelOrdersSlice'
import {useDispatch} from 'react-redux'

const AddOrders = () => {
      const dispatch = useDispatch();
  const [customerName, setCustomerName] = useState("");

  const handleSubmit = () => {
    dispatch(
      addOrders(customerName)
    );
    setCustomerName("");
  };
  return (
    <div> 
        <h2>Place New Order</h2>
      <input
        type="text"
        value={customerName}
        placeholder="Customer Name"
        onChange={(e) => setCustomerName(e.target.value)}
      />

      <button onClick={handleSubmit}>Place Order</button></div>
  )
}

export default AddOrders