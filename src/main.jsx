import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const suggestions = [
    {
        question: 'Give me a fun fact',
        userId: "1X",
        botReply: "I'm just a bot.",
        id: "1XY",
    },
    {
        question: "What's the weather like today?",
        userId: "2X",
        botReply: "I'm just a bot.",
        id: "2XY",
    },
    {
        question: "When do I have submit my taxes?",
        userId: "3X",
        botReply: "I'm just a bot.",
        id: "3XY",
    },
    {
        question: "Write me a react script",
        userId: "4X",
        botReply: "I'm just a bot.",
        id: "4XY",
    }
]

ReactDOM.createRoot(document.getElementById("root")).render(<App suggestions={suggestions} />);
