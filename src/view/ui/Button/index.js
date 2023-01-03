import { Button } from '@mui/material';
const ButtonCustom = ({click,children, ...other}) => {
  return (
    <Button {...other} style={{ color: 'green' }} onClick={click}>
      {children}
    </Button>
  );
};

export default ButtonCustom;
