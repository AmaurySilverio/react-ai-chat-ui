import { Button } from '@mui/material'

const CustomButton = ({ text, type, value, onClick }) => {
  return (
    <Button sx={{backgroundColor: "red", "&:focus": {borderColor: "white", borderWidth: "0.1rem", borderStyle: "solid"}, "&:hover": {borderColor: "white", borderWidth: "0.1rem", borderStyle: "solid"}, color: "white", fontSize: "0.75rem", fontWeight: 700}} type={type} value={value} onClick={onClick}>
      {text}
    </Button>
  );
};

export default CustomButton;
