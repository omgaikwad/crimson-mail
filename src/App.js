import "./App.css";
import EmailContent from "./components/EmailContent/EmailContent";
import SingleEmailItem from "./components/SingleEmailItem/SingleEmailItem";
import EmailInbox from "./pages/EmailInbox/EmailInbox";

function App() {
  return (
    <div className="App">
      <div className="single_email_item_container">
        <EmailInbox />
      </div>
    </div>
  );
}

export default App;
