import {default as Button } from "./components/Button";
import Display from "./components/Display";
import Answer from "./components/Answer";
import { useState } from "react";
import { AppBar, Box, CircularProgress, Input, List, Stack, Typography } from '@mui/material'

const App = () => {
  const [userInput, setUserInput] = useState("");
  const [search, setSearch] = useState([]);
  const [response, setResponse] = useState([]);
  const [waiting, setWaiting] = useState(false)
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
    setWaiting(true)
    setTimeout(() => {
      const newResponse = {
        content: "I'm just a bot.",
        id: search.length + 1 + "X",
        question: userInput,
        userId: search.length + 1 + "Y",
      };
      setResponse(response.concat(newResponse));
      setWaiting(false)
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
      <AppBar sx={{backgroundColor: "red", fontSize: "3rem", fontWeight: 700, height: "5rem", padding: "1rem", position: "static"}}>Resilient Bot</AppBar>
      <div>
        <Typography
            sx={{color: "white", padding: "2rem"}}
            variant="h1">How can I help you today?</Typography>
      </div>
      <Box>
        {waiting ? (
          <CircularProgress/>
        ) : (
        <ul>
          {response.map((input) => (
            <>
              {console.log("question", input)}
              <Display key={input.id} response={input.question} sx={{color: "white"}}/>
              <List>
                <Answer key={input.userId} response={input.content} />
              </List>
            </>
          ))}
        </ul>
        )}
      </Box>
      <div className="search-container">
        <div>
          <form onSubmit={handleFormSubmit}>
            <Stack direction={{ xs: 'column', sm: 'row' }} sx={{margin: "0.5rem"}} spacing={2}>
              <Input 
                sx={{ backgroundColor: 'white', padding: "0.25rem", width: "25rem"}}
                value={userInput} 
                onChange={handleUserInput} 
              />
              <Button text="submit" type="submit" />
            </Stack>
          </form>
        </div>
        <div className="btn-container">
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button
              text="Give me a fun fact"
              value={suggestedQuestion}
              onClick={automatedResponseHandler}
              type="text"
            />
            <Button text="What's the weather like today?" />
            <Button text="When do I have submit my taxes?" />
            <Button text="Write me a react script" />
          </Stack>
        </div>
      </div>
    </div>
  );
};
export default App;
