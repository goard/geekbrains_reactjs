import {useDispatch, useSelector} from "react-redux"
import { Checkbox } from "@mui/material"

const Account = () => {
  const checkbox = useSelector(store => store.checkbox)
  const dispatch = useDispatch()

  const handleChange = (id) => {
    const payload = checkbox.map((todo) => {
      if (todo.id === id) {
        return { ...todo, checked: !todo.checked };
      } else {
        return todo;
      }})
      console.log("handleChange", payload)
    dispatch({type: 'CHECKED', payload});
  };
  return (
    <>
      <h1>Account</h1>
      {checkbox.map(el => (
        <Checkbox
          key={el.id}
          checked={el.checked}
          onChange={() => handleChange(el.id)}
        />
      ))}
    </>
  )
}

export default Account
