import Links from "./components/Links";
import Header from "./components/Header";
import ThemeDropdown from "./components/ThemeDropdown";

function App() {
  return (
    <>
      <main className="dark:bg-[#0a0a0a] bg-white text-white min-h-dvh flex justify-center items-center">
        <div className="w-4/5 max-w-96">

          <div className="animate-translate">
            <Header />
            
            <Links />
          </div>

          <ThemeDropdown />
        </div>
      </main>
    </>
  );
}

export default App
