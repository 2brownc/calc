import react from 'react';
import Button from '@mui/material/Button';

const Btn = ({
  children,
  variant="contained",
  color="primary",
  fullWidth=true,
  onClick,
  args
}) => {
  return (
  <Button
    variant={variant}
    color={color}
    fullWidth={fullWidth}
    style={{ borderRadius: '0px' }}
    onClick={() => onClick(args)}
  >
    {children}
  </Button>
  );
};

export default Btn;
