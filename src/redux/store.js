import { createStore } from "redux"
import { composeWithDevTools } from "@redux-devtools/extension"
import { initState } from "./initState"
import { checkBoxReducer } from "./reducers/checkBoxReducer"

export const store = createStore(
  checkBoxReducer,
  initState,
  composeWithDevTools()
)