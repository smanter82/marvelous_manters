import "./App.css";
import SalaMander from "./pages/SalaMander";
import HomePage from "./pages/HomePage";
import Maiacorn from "./pages/Maiacorn";
import DuncMan from "./pages/DuncMan";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/salamander" component={SalaMander} />
          <Route path="/maiacorn" component={Maiacorn} />
          <Route path="/duncman" component={DuncMan} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
