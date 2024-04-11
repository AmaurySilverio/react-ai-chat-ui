const Button = ({ id, text, type, value, onClick }) => {
  return (
    <button id={id} className="btn" type={type} value={value} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
