import Links from "./components/Links";
import Header from "./components/Header";

function App() {
  return (
    <>
      <main className="bg-[#0a0a0a] text-white min-h-dvh flex justify-center items-center">
        <div className="w-4/5 max-w-96">
          <Header />

          <Links />
        </div>
      </main>
    </>
  );
}

export default App
