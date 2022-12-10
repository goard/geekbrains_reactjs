import { Button } from '@mui/material'
const ButtonCustom = (props) => {
  return <Button {...props}>{props.children}</Button>
}

export default ButtonCustom
