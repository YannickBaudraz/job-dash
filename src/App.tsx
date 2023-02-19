import logo from './assets/logo/logo_transparent.png';

function App() {
  return (
    <>
      <nav>
        <img
          src={logo}
          alt="logo"
          width="250"
          height="110"
          style={{ objectFit: 'cover' }}
        />
      </nav>
      <main>
        <h1 className="text-3xl font-bold underline">
          Vite + React + Typescript + Tailwind
        </h1>
      </main>
    </>
  );
}

export default App;
