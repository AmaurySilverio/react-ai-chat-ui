const Display = ({ userInput, response }) => {
  console.log(userInput);
  return (
    <div>
      <ul>
        {userInput.map((input) => (
          <li key={input.id}>
            {input.content} {response}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Display;
