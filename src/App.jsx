import Button from "./components/Button";
import Display from "./components/Display";
import Answer from "./components/Answer";
import { useState } from "react";

const App = (props) => {

  const [userInput, setUserInput] = useState("");
  const [search, setSearch] = useState(props.suggestions);
  const [response, setResponse] = useState([]);
  const [suggestedQuestion, setSuggestedQuestion] = useState("");

  const [showSuggested, setShowSuggested] = useState(true)

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newSearch = {
      question: userInput,
      userId: search.length + 1 + "X",
      botReply: '',
      id: '',
    };
    setSearch(search.concat(newSearch));
    setUserInput("");
    setShowSuggested(false)
    botResponse();
  };
  const botResponse = () => {
    setTimeout(() => {
      const newResponse = {
        question: userInput,
        userId: search.length + 1 + "X",
        botReply: "I'm just a bot.",
        id: search.length + 1 + "XY",
        selected: true,
      };
      setResponse(response.concat(newResponse));
    }, 3000);
  };

  const handleButtonInput = () => {
    // event.preventDefault();
    const newSearch = {
      question: suggestedQuestion,
      id: search.length + 1 + "XY",
    };
    setSearch(search.concat(newSearch));
    setUserInput("");
    botResponse();
  };

  // Handling responses for suggested questions button that are on site at page load
  const getAutomatedBotResponse = (showSuggested) => {
    setShowSuggested(showSuggested);
  };

  //  Handling the static response from BOT will change when we plug in api 
  const automatedResponseHandler = (event) => {
    getAutomatedBotResponse()
    // map through all of the props.suggestions and which response matched  the current id (event.target.id) return the object that does and insert into response object
    const sqs = props.suggestions
    const currentSuggestions = sqs.map((suggested) => {
      if (suggested.userId === event.target.id) {
        return setResponse(response.concat(suggested));
      }
    })
    const buttonText = event.target.textContent;
    setSuggestedQuestion(buttonText);
    // handleButtonInput();
    setShowSuggested(false)
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
              <Answer key={input.userId} response={input.botReply} />
            </ul>
          </>
        ))}
      </ul>
      <div className="search-container">
        <div className="btn-container">
          {showSuggested && props.suggestions.map((suggested) => (
            <>
              <Button
                text={suggested.question}
                id={suggested.userId}
                onClick={automatedResponseHandler}
                type="text"
              />
            </>
          ))
          }
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
