import CartItem from "../../components/cart-item/CartItem";
import { addItemToCart, removeItems } from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems:[]
}


 const cartReducer=(state = INITIAL_STATE, action) => {
  switch (action.type) {
		case 'TOGGLE_CART_HIDDEN':
			return {
				...state,
				hidden: !state.hidden,
			};
			break;
		case 'ADD_ITEM':
			return {
				...state,
				cartItems: addItemToCart(state.cartItems, action.payload),
			};

		case 'REMOVE_ITEM':
			return {
				...state,
				cartItems: state.cartItems.filter(CartItem => CartItem.id !== action.payload.id),
			};
		
		case 'MINUS':
			return {
				...state,
				cartItems: removeItems(state.cartItems, action.payload)
			}

		default:
			return state;
	}
}
export default cartReducer