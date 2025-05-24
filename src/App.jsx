import Links from "./components/Links";

function App() {
  return (
    <>
      <main className="bg-[#0a0a0a] text-white min-h-dvh flex justify-center items-center">
        <div className="w-4/5 max-w-96">
          <h1 className="font-title italic leading-9 tracking-[-3px] lowercase text-5xl w-fit mx-auto mb-6">
            Gabriel
            <span className="block ml-4">Carvalho</span>
          </h1>

          <Links />
        </div>
      </main>
    </>
  );
}

export default App
