import "./App.css";
import { Amount, Declaration, Plans, ProgressBar, Review } from "./components";
import { useFormContext } from "./context/FormContext";

function App() {
  const { page } = useFormContext();

  const renderForms = () => {
    switch (page) {
      case 0:
        return <Plans />;

      case 1:
        return <Amount />;

      case 2:
        return <Declaration />;

      case 3:
        return <Review />;

      default:
        return "";
    }
  };

  return (
    <>
    <ProgressBar page={page} />
      <div className="container">
        <div className="progress_bar"></div>
        <div className="wrapper form_wapper">{renderForms()}</div>
      </div>
    </>
  );
}

export default App;
