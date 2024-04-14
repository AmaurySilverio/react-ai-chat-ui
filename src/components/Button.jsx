import { Button } from '@mui/material'

const CustomButton = ({ text, type, value, onClick }) => {
  return (
    <Button sx={{
      backgroundColor: "LightGray", 
      color: "#212121",
      "&:hover": {
        borderColor: "purple", 
        color: "white", 
        borderWidth: "0.1rem", 
        borderStyle: "solid"}, 
        fontSize: "0.75rem", 
        width: "inherit", 
        fontWeight: 700
      }} 
      type={type} 
      value={value} 
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
