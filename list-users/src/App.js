import { BrowserRouter } from "react-router-dom";
import { UsersProvider } from "./context/UsersProvider";
import Routes from "./routes";


function App() {
  return (
    <UsersProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </UsersProvider>
    
  );
}

export default App;
