import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import Chat from "./Chat";
import Login from "./Login";
import { useDataLayerValue } from "./DataLayer";

function App() {
  // for dump testing
  // const [user, setUser] = useState(null);

  // now using State Provider
  const [user, dispatch] = useDataLayerValue();

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app__body">
              {/* Sidebar */}
              <Sidebar />

              <Switch>
                <Route path="/room/:roomId" element={<Chat />} />
                <Route path="/" element={<h1>Welcome</h1>} />
              </Switch>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
