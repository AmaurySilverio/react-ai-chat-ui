import { default as Button } from "./components/Button";
import Display from "./components/Display";
import CustomButton from "./components/Button"; // Import the CustomButton component
import Answer from "./components/Answer";
import { useState } from "react";
import {
  AppBar,
  Box,
  CircularProgress,
  Input,
  List,
  Stack,
  Typography,
} from "@mui/material";

const App = () => {
  const [userInput, setUserInput] = useState("");
  const [search, setSearch] = useState([]);
  const [response, setResponse] = useState([]);
  const [waiting, setWaiting] = useState(false);
  const [suggestedQuestion, setSuggestedQuestion] = useState("");
  const [history, setHistory] = useState([]);
  const [editingMessage, setEditingMessage] = useState(null); // New state for editing message
  
  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };
  const handleFormSubmit = (event) => {
    console.log(event);
    event.preventDefault();
    if (userInput < 1) {
      alert("You Must Type Something First");
      return;
    }

    if(editingMessage){
      const editResponse = response.find((i) => i.id === editingMessage );
      const updateEntry = response.map((e) => e.id === editResponse.id ? e={ id: e.id, userInput} : {id: e.id, userInput: e.userInput})
      setResponse(updateEntry)
      setEditingMessage(0)
    }
    console.log(event.target.parentElement.previousSibling);
    event.target.parentElement.previousSibling.setAttribute(
      "data-status",
      "hidden"
    );
    const newSearch = {
      content: userInput,
      id: search.length + 1,
    };
    setSearch(search.concat(newSearch));
    setUserInput("");
    botResponse();
  };
  const botResponse = () => {
    setWaiting(true);
    setTimeout(() => {
      const newResponse = {
        content: "I'm just a bot.",
        id: search.length + 1 + "X",
        question: userInput,
        userId: search.length + 1 + "Y",
      };
      setResponse(response.concat(newResponse));
      setWaiting(false);
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

  const handleEdit = (id) => {
    setEditingMessage(id);
  }

  const handleEditSubmit = (id) => {
   const editEntry = response.find((i) => i.id === id )
   setUserInput(editEntry.userInput)
   setEditingMessage(id)
  };

  const handleNewSearch = () => {
    // let suggestedButtons =
    //   event.target.parentNode.offsetParent.firstElementChild.children[0]
    //     .children[3].children[0];
    // suggestedButtons.removeAttribute("data-status");
    console.log("new search");
    setHistory([...history, ...response]);
    setUserInput("");
    setSearch([]);
    setResponse([]);
    setWaiting(false);
    setSuggestedQuestion("");
  };
  return (
    <div>
      <AppBar
        sx={{
          backgroundColor: "red",
          fontSize: "3rem",
          fontWeight: 700,
          height: "5rem",
          padding: "1rem",
          position: "static",
        }}
      >
        Resilient Bot
      </AppBar>
      <div>
        <span className="newSearchIcon" onClick={handleNewSearch}>
          New Search Icon
        </span>
        <Typography sx={{ color: "white", padding: "2rem" }} variant="h1">
          How can I help you today?
        </Typography>
      </div>
      <Box>
        {waiting ? (
          <CircularProgress />
        ) : (
          <ul>
            {response.map((input) => (
        <List key={input.id}>
        {editingMessage === input.id ? (
          <Input
            value={input.content}
            onChange={(e) => handleEditSubmit(e.target.value)}
            autoFocus
          />
        ) : (
          <>
            {console.log("question", input)}
            <Display
              key={input.id}
              response={input.question}
              sx={{ color: "white" }}
            />
            <Answer key={input.userId} response={input.content} />
            <CustomButton text="Edit" onClick={() => handleEdit(input.id)} /> Replace CustomButton with EditButton
          </>
        )}
      </List>  
            ))}
          </ul>
        )}
      </Box>
      <div className="search-and-suggestion-button-container">
        <div className="btn-container">
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <CustomButton
              text="Give me a fun fact"
              value={suggestedQuestion}
              onClick={automatedResponseHandler}
              type="text"
            />
            <CustomButton text="What's the weather like today?" />
            <CustomButton text="When do I have submit my taxes?" />
            <CustomButton text="Write me a react script" />
          </Stack>
        </div>
        <div className="search-container">
          <form onSubmit={handleFormSubmit}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              sx={{ margin: "0.5rem" }}
              spacing={2}
            >
              <Input
                sx={{
                  backgroundColor: "white",
                  padding: "0.25rem",
                  width: "25rem",
                }}
                value={userInput}
                onChange={handleUserInput}
              />
              <CustomButton text="submit" type="submit" />
            </Stack>
          </form>
        </div>
      </div>
    </div>
  );
};
export default App;
