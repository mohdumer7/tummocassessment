export const setAuthToken = (token) => ({
    type: 'SET_AUTH_TOKEN',
    payload: token,
  });

export const removeAuthToken = ()=>({
  type: 'REMOVE_AUTH_TOKEN'
})

export const setUser = (user)=>({
  type: 'USER',
  payload:user
})

export const setCities = (cities)=>({
  type: 'CITIES',
  payload:cities
})

export const addCity = (city)=>({
  type: 'ADD_CITY',
  payload:city
})

export const removeCity = (city)=>({
  type: 'REMOVE_CITY',
  payload:city
})

