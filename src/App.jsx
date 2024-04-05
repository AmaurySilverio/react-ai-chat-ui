import Button from "./components/Button";
import Display from "./components/Display";
import { useState } from "react";

const App = () => {
  const [userInput, setUserInput] = useState("");
  const [search, setSearch] = useState([]);
  const [response, setResponse] = useState("I'm just a bot.");
  // const response = "I'm just a bot."
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
  };
  const botResponse = () => {
    setTimeout(() => {
      const response = {
        content: "I'm just a bot.",
        question: userInput,
        id: search.length + 1,
      };
      // setSearch(search.concat(response));
    }, 3000);
  };

  return (
    <>
      <div>
        <h1>How can I help you today?</h1>
      </div>
      <Display userInput={search} response={response} />
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
    </>
  );
};

export default App;
