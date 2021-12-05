import "./App.css";
import logo from "./logo.png";

function App() {
  return (
    <header className="relative w-full h-screen header">
      <div className="absolute w-1/12 logo-box top-10 left-10">
        <img src={logo} alt="Corpus Christi Axe Haus Logo" className="logo" />
      </div>
      <div className="absolute w-full text-center header-box top-1/2 left-1/2">
        <h1 className="text-center text-white uppercase heading-main">
          <span className="block mb-5 text-5xl tracking-widest heading-primary">
            Corpus Christi Axe Haus
          </span>
          <span className="block text-2xl tracking-widest tagline">
            A virtual Vallhalla for legenday experiences
          </span>
        </h1>
        <a
          href="/"
          className="inline-block transform hover:scale-110 motion-reduce:transform-none py-4 px-4 bg-gray-50 text-gray-500 rounded-2xl mt-6"
        >
          Book Your Experience
        </a>
      </div>
    </header>
  );
}

export default App;
