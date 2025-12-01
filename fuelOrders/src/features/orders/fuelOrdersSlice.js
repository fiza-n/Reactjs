import {createSlice,nanoid} from '@reduxjs/toolkit'


const fuelOrdersSlice = createSlice({
    name: 'orders',
    initialState:{
        orders:[{id:1, customerName:"John Doe", status:"Pending"},],
       
    },
    reducers:{
        addOrders: (state, action)=>{
            state.orders.push(action.payload)
        },
        updateOrderStatus: (state,action)=>{
            const {id,customerName, status} = action.payload
            const orders = state.orders.find(order => order.id === id)
            if(orders) orders.status = status
        },
   
}
});

export const {addOrders, updateOrderStatus} = fuelOrdersSlice.actions;

export default fuelOrdersSlice.reducer;