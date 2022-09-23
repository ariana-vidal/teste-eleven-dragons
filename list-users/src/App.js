import { UsersProvider } from "./context/UsersProvider";
import { AllUsers } from "./pages/AllUsers";


function App() {
  return (
    <UsersProvider>
      <AllUsers />
    </UsersProvider>
    
  );
}

export default App;
