// reducers.js
const initialState = {
    authToken: null,
    user:null,
    cities:[]
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_AUTH_TOKEN':
        return {
          ...state,
          authToken: action.payload,
        };
      case 'REMOVE_AUTH_TOKEN':
        return{
          ...state,
          authToken:null
        }
      case "USER":
        return{
          ...state,
          user:action.payload
        }
      case "CITIES":
        return{
          ...state,
          cities:[...action.payload]
        }
      case "ADD_CITY":
        return{
          ...state,
          cities:[...state.cities,action.payload]
        }
      case "REMOVE_CITY":
        return{
          ...state,
          cities:[...state.cities.filter((city) => city._id !== action.payload)]
        }
      default:
        return state;
    }
  };
  
  export default reducer;
  