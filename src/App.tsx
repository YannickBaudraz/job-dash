import logo from './assets/logo/logo_transparent.png';

function App() {
  return <>
    <nav>
      <img src={logo} alt="logo" width="250" height="110" style={{objectFit: 'cover'}} />
    </nav>
    <main>
      <h1>Vite + React + Typescript</h1>
    </main>
  </>;
}

export default App;
