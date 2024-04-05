import Button from "./components/Button";

const App = () => {
  return (
    <>
      <div>
        <h1>How can I help you today?</h1>
      </div>
      <div className="search-container">
        <div className="btn-container">
          <div>
            <Button text="suggestion here" />
            <Button text="suggestion here" />
          </div>
          <div>
            <Button text="suggestion here" />
            <Button text="suggestion here" />
          </div>
        </div>
        <div>
          <input placeholder="message ResilientBot" />
        </div>
      </div>
    </>
  );
};

export default App;
