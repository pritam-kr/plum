import "./App.css";
import { Amount, Declaration, Plans, Review } from "./components";

function App() {
  return (
    <>
      <div className="container">
        <div className="progress_bar"></div>
        <div className="wrapper form_wapper">
          <Amount />
        </div>
      </div>
    </>
  );
}

export default App;
