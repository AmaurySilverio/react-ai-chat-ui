const Display = ({ response }) => {
  console.log("Display", response);
  return (
    <div>
      <li>{response}</li>
    </div>
  );
};
export default Display;
