import "./App.css";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        <Button buttonStyle="primary" /> <br />
        <Button buttonStyle="secondary" />
      </div>
      <hr />
      <div className="alert-components-section">
        <Alert alertStyle="error-alert" alertText="This is error alert box" />

        <Alert
          alertStyle="warning-alert"
          alertText="This is warning alert box"
        />

        <Alert alertStyle="info-alert" alertText="This is info alert box" />

        <Alert
          alertStyle="success-alert"
          alertText="This is success alert box"
        />
      </div>
    </div>
  );
}

export default App;
