import { ModeToggle } from "./components/ui/mode-toggle";

function App() {
  return (
    <div className="min-h-screen">
      <div className="fixed top-4 right-4 z-10">
        <ModeToggle />
      </div>
      {/* Add other page content here */}
    </div>
  );
}

export default App;
