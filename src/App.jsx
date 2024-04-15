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
  // State variables
  const [userInput, setUserInput] = useState(""); // Holds user input
  const [search, setSearch] = useState([]); // Holds user queries
  const [response, setResponse] = useState([]); // Holds bot responses
  const [waiting, setWaiting] = useState(false); // Indicates if bot is processing
  const [editingMessage, setEditingMessage] = useState(null); // ID of message being edited

  // Event handler for user input change
  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

  // Event handler for form submission
  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Check if user input is empty
    if (userInput.trim().length === 0) {
      alert("You must type something first");
      return;
    }

    // If editing an existing message
    if (editingMessage !== null) {
      const updatedSearch = search.map((entry) =>
        entry.id === editingMessage ? { ...entry, content: userInput } : entry
      );
      setSearch(updatedSearch);
      setEditingMessage(null);
    } else {
      // If adding a new message
      const newEntry = {
        content: userInput,
        id: search.length + 1,
        botResponse: "I'm just a bot.",
      };
      setSearch([...search, newEntry]);
      botResponse();
    }

    setUserInput("");
  };

  // Simulates bot response after a delay
  const botResponse = () => {
    setWaiting(true);
    setTimeout(() => {
      const newResponse = {
        content: "I'm just a bot.",
        id: search.length + 1 + "X",
        question: userInput,
        userId: search.length + 1 + "Y",
      };
      setResponse([...response, newResponse]);
      setWaiting(false);
    }, 3000);
  };

  // Event handler for editing a message
  const handleEdit = (id) => {
    const entryToEdit = search.find((entry) => entry.id === id);
    setUserInput(entryToEdit.content);
    setEditingMessage(id);
  };

  // Event handler for starting a new search session
  const handleNewSearch = () => {
    setUserInput("");
    setSearch([]);
    setResponse([]);
    setWaiting(false);
  };

  // JSX rendering
  return (
    <div>
      {/* AppBar */}
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
      
      {/* New Search Icon */}
      <div>
        <span className="newSearchIcon" onClick={handleNewSearch}>
          New Search Icon
        </span>
        <Typography sx={{ color: "white", padding: "2rem" }} variant="h1">
          How can I help you today?
        </Typography>
      </div>
      
      {/* Main Content */}
      <Box>
        {waiting ? (
          <CircularProgress />
        ) : (
          <ul>
            {search.map((entry) => (
              <List key={entry.id}>
                {editingMessage === entry.id ? (
                  // Input field for editing
                  <Input
                    value={userInput}
                    onChange={handleUserInput}
                    autoFocus
                  />
                ) : (
                  // Display user query and bot response
                  <>
                    <Display
                      key={entry.id}
                      response={entry.content}
                      sx={{ color: "white" }}
                    />
                    <Display
                      key={`${entry.id}-bot`}
                      response={entry.botResponse}
                      sx={{ color: "white" }}
                    />
                    {/* Edit button */}
                    <CustomButton text="Edit" onClick={() => handleEdit(entry.id)} />
                  </>
                )}
              </List>
            ))}
          </ul>
        )}
      </Box>
      
      {/* Button Container */}
      <div className="search-and-suggestion-button-container">
        <div className="btn-container">
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            {/* Suggestion buttons */}
            <CustomButton text="Give me a fun fact" onClick={() => setUserInput("Give me a fun fact")} type="text" />
            <CustomButton text="What's the weather like today?" />
            <CustomButton text="When do I have submit my taxes?" />
            <CustomButton text="Write me a react script" />
          </Stack>
        </div>
        
        {/* Search Container */}
        <div className="search-container">
          <form onSubmit={handleFormSubmit}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              sx={{ margin: "0.5rem" }}
              spacing={2}
            >
              {/* Input field and Submit button */}
              <Input
                sx={{
                  backgroundColor: "white",
                  padding: "0.25rem",
                  width: "25rem",
                }}
                value={userInput}
                onChange={handleUserInput}
              />
              <CustomButton text="Submit" type="submit" />
            </Stack>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;