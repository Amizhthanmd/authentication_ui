import AppRoutes from "./app-routes";
import { ModeToggle } from "./components/ui/mode-toggle";

function App() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute top-4 right-4 z-10">
        <ModeToggle />
      </div>
      <AppRoutes />
      {/* Add other page content here */}
    </div>
  );
}

export default App;
