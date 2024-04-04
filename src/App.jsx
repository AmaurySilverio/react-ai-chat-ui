import Button from "./components/Button";

const App = () => {
  return (
    <>
      <div>
        <h1>How can I help you today?</h1>
      </div>
      <div>
        <Button text="suggestion here" />
        <Button text="suggestion here" />
        <Button text="suggestion here" />
        <Button text="suggestion here" />
        <input placeholder="message ResilientBot" />
      </div>
    </>
  );
};

export default App;
