import Login from "./components/auth/login";
import { ModeToggle } from "./components/ui/mode-toggle";

function App() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute top-4 right-4 z-10">
        <ModeToggle />
      </div>
      <Login />
      {/* Add other page content here */}
    </div>
  );
}

export default App;
