const Display = ({ response }) => {
  console.log("Display", response);
  return (
    <div>
      <li className="userInputFont">{response}</li>
    </div>
  );
};
export default Display;
