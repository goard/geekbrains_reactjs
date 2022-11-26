import {initState} from "../initState"

export const checkBoxReducer = (state = initState, action) => {
  const {type, payload} = action

  switch (type) {
    case 'CHECKED':
      return {...state, checkbox: payload } 
    default:
      return state
  }
}