
const INITIAL_STATE = {
  currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER': //If the action matches the case return the bottom code
      return {
        ...state,
        currentUser: action.payload
      }
      break;
  
    default:
      return state
      break;
  }
}

export default userReducer