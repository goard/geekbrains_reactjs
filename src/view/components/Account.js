import { useDispatch, useSelector } from 'react-redux'
import { Checkbox } from '@mui/material'
import { checked } from '../../features/checkboxSlice'

const Account = () => {
  const checkbox = useSelector((state) => state.checkbox)
  const dispatch = useDispatch()

  const handleChange = (id) => {
    dispatch(checked(id))
  }

  return (
    <>
      <h1>Account</h1>
      {checkbox.map((el) => (
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
