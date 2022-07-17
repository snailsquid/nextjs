import Background from "../components/Background";
import Navbar from "../components/Navbar";
import Home from "../components/Home";

function App() {
  return (
    <div className="App">
      <Background color="blue" etc=" flex-col">
        <Navbar />
        <Home />
      </Background>
    </div>
  );
}

export default App;
