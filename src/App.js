import "./App.css";
import HeaderTop from "./feature/HeaderTop/HeaderTop";
import Nav from "./feature/Nav/Nav";
import Highlight from "./feature/Highlight/Highlight";
import Container from "./feature/Container/Container";


function App() {
    return (
        <div className="App">
            <HeaderTop />
            <Nav />
            <Highlight />
            <Container />
        </div>
    );
}

export default App;
