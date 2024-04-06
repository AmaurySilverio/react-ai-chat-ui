import Button from "./components/Button";
import Display from "./components/Display";
import Answer from "./components/Answer";
import { useState } from "react";


const App = () => {
  const [userInput, setUserInput] = useState("");
  const [search, setSearch] = useState([]);
  const [response, setResponse] = useState([]);
  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newSearch = {
      content: userInput,
      id: search.length + 1,
    };
    setSearch(search.concat(newSearch));
    setUserInput("");
    botResponse();
  };
  const botResponse = () => {
    setTimeout(() => {
      const newResponse = {
        content: "I'm just a bot.",
        id: search.length + 1 + "X",
        question: userInput,
        userId: search.length + 1 + "Y",
      };
      setResponse(response.concat(newResponse));
    }, 3000);
  };

  return (
    <div>
      <div>
        <h1>How can I help you today?</h1>
      </div>
      <ul>

        {response.map((input) => (
          <>
            <Display key={input.id} response={input.question} />
            <ul>
            <Answer key={input.userId} response={input.content} />
            </ul>
            </>
        
        ))}
      </ul>
      <div className="search-container">
        {/* <div className="btn-container">
          <div>
            <Button text="suggestion here" />
            <Button text="suggestion here" />
          </div>
          <div>
            <Button text="suggestion here" />
            <Button text="suggestion here" />
          </div>
        </div> */}
        <div>
          <form onSubmit={handleFormSubmit}>
            <input value={userInput} onChange={handleUserInput} />
            <Button text="submit" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};
export default App;

