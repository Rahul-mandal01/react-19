import Header from "./Header";

function App() {
  return (
    <div>
      <Header />
      <p>Hello React</p>
      <Fruit />

      {/* We can Import component like this as well */}
      <Color></Color>  
    </div>
  );
}

function Fruit() {
  return (
    <div>
      <h2>Fruits</h2>
      <ul>
        <li>Apple</li>
        <li>Banana</li>
        <li>Orange</li>
      </ul>
    </div>
  );
}

function Color() {
  return (
    <div>
      <h2>Colors</h2>
      <ul>
        <li>Red</li>
        <li>Green</li>
        <li>Blue</li>
      </ul>
    </div>
  );
}

export default App;
