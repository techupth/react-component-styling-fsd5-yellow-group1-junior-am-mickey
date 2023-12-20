import "./App.css";
import Button from "./components/Button";
import Alert from "./components/Alert";
import alertCircle from "./components/alertIcon/AlertCircle.svg";
import alertTriangle from "./components/alertIcon/AlertTriangle.svg";
import checkCircle from "./components/alertIcon/CheckCircle.svg";
import frown from "./components/alertIcon/Frown.svg";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        <Button buttonStyle="primary-button" buttonText="Large" />
        <Button buttonStyle="secondary-button" buttonText="Large" />
      </div>
      <hr />
      <div className="alert-components-section">
        <Alert
          alertStyle="error-alert"
          alertImg={frown}
          alertText="This is error alert box"
        />
        <Alert
          alertStyle="warning-alert"
          alertImg={alertTriangle}
          alertText="This is warning alert box"
        />
        <Alert
          alertStyle="info-alert"
          alertImg={alertCircle}
          alertText="This is info alert box"
        />
        <Alert
          alertStyle="success-alert"
          alertImg={checkCircle}
          alertText="This is success alert box"
        />
      </div>
    </div>
  );
}

export default App;
