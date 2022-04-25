import { createContext, useReducer } from 'react';

export const Store = createContext();

const cartReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_TO_CART':
      const newItem = action.payload;
       const existItem = state.cart.cartItems.find((x)=>x._id === newItem._id)
       const cartItems = existItem 
       ? state.cart.cartItems.map((item)=>
        item._id === existItem._id ? newItem:item
       ): [...state.cart.cartItems, newItem]
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      return {...state, cart: {...state.cart, cartItems}}
    
    case 'REMOVE_FROM_CART':
      const items = state.cart.cartItems.filter((cartItem)=>cartItem._id !== action.payload);
      localStorage.setItem('cartItems', JSON.stringify(items));
      return {...state, cart: {cartItems: [...items]}}

    case 'SIGNIN_USER':
      return {...state, userInfo: action.payload}

    case 'SIGNOUT_USER':
      return {...state, userInfo: null}
    default:
      return {...state}
  }
}
const initialState = {
  cart: {
    cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
  },
  userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')):null
};
export default function CartProvider (props) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const value = {state, dispatch}
  return <Store.Provider value={{ state: state, dispatch: dispatch }}>
    {props.children}
  </Store.Provider>
}