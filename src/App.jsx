import Button from "./components/Button";
import Display from "./components/Display";
import Answer from "./components/Answer";
import { useState } from "react";

const App = () => {
  const [userInput, setUserInput] = useState("");
  const [search, setSearch] = useState([]);
  const [response, setResponse] = useState([]);
  const [suggestedQuestion, setSuggestedQuestion] = useState("");
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
  const handleButtonInput = () => {
    // event.preventDefault();
    // const buttonText = event.target.textContent;
    // setSuggestedQuestion(buttonText);
    // console.log(buttonText, "buttonText");
    // console.log(event);
    console.log("response working");
    const newSearch = {
      content: suggestedQuestion,
      id: search.length + 1,
    };
    console.log("22suggested", newSearch.content);
    setSearch(search.concat(newSearch));
    console.log("suggested", suggestedQuestion);
    console.log(newSearch, "newsearch");
    setUserInput("");
    botResponse();
  };

  const automatedResponseHandler = (event) => {
    console.log("handlebuttoninput", event.target.textContent);

    console.log(event.target.value, "value");
    const buttonText = event.target.textContent;
    setSuggestedQuestion(buttonText);
    handleButtonInput();
  };

  return (
    <div>
      <div>
        <h1>How can I help you today?</h1>
      </div>
      <ul>
        {response.map((input) => (
          <>
            {console.log("question", input)}
            <Display key={input.id} response={input.question} />
            <ul>
              <Answer key={input.userId} response={input.content} />
            </ul>
          </>
        ))}
      </ul>
      <div className="search-container">
        <div className="btn-container">
          <div>
            <Button
              text="Give me a fun fact"
              value={suggestedQuestion}
              onClick={automatedResponseHandler}
              type="text"
            />
            <Button text="What's the weather like today?" />
          </div>
          <div>
            <Button text="When do I have submit my taxes?" />
            <Button text="Write me a react script" />
          </div>
        </div>
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
