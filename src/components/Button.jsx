const Button = ({ text, type, value, onClick }) => {
  return (
    <button className="btn" type={type} value={value} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
