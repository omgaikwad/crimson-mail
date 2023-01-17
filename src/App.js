import "./App.css";
import EmailContent from "./components/EmailContent/EmailContent";
import SingleEmailItem from "./components/SingleEmailItem/SingleEmailItem";

function App() {
  return (
    <div className="App">
      <div className="single_email_item_container">
        <EmailContent />
      </div>
    </div>
  );
}

export default App;
