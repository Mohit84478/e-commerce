import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carte: [],
  totalquantity: 0,
  totalprice: 0,
}; 

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addtocart(state, action) {
      console.log("Dispatching addtocart:", action.payload);
    
      const newItem = action.payload;
      const existingItem = state.carte.find(item => item.id === newItem.id);
      
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalprice += newItem.price;
      } else {
        state.carte.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          totalprice: newItem.price,
          Size:newItem.size,
          image: newItem.image,
        });
      }
    
      state.totalprice += newItem.price;
      state.totalquantity += 1;
    },

    removerfromcart(state, action) {
      const id = action.payload;
      const findItem = state.carte.find(item => item.id === id);
      
      if (findItem) {
        state.totalprice -= findItem.totalprice; // Subtract the total price of the removed item
        state.totalquantity -= findItem.quantity; // Subtract the quantity of the removed item
        state.carte = state.carte.filter(item => item.id !== id);
      }
    },

    increasequality(state, action) {
      const id = action.payload;
      const findItem = state.carte.find(item => item.id === id);

      if (findItem) {
        findItem.quantity += 1;
        findItem.totalprice += findItem.price; // Increase total price for that item
        state.totalprice += findItem.price; // Increase total cart price
        state.totalquantity += 1; // Increase total quantity
      }
    },

    decreasequality(state, action) {
      const id = action.payload;
      const findItem = state.carte.find(item => item.id === id);

      if (findItem && findItem.quantity > 1) {
        findItem.quantity -= 1;
        findItem.totalprice -= findItem.price; // Decrease total price for that item
        state.totalprice -= findItem.price; // Decrease total cart price
        state.totalquantity -= 1; // Decrease total quantity
      } else {
        // If only 1 quantity left, remove the item from the cart
        state.totalprice -= findItem.totalprice;
        state.totalquantity -= findItem.quantity;
        state.carte = state.carte.filter(item => item.id !== id);
      }
    }
  }
});

export const { addtocart, removerfromcart, decreasequality, increasequality } = cartSlice.actions;
export default cartSlice.reducer;
