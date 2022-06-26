import "./App.css";
import HeaderTop from "./feature/HeaderTop/HeaderTop";
import Nav from "./feature/Nav/Nav";
import Highlight from "./feature/Highlight/Highlight";
import News from "./feature/RecentNews/News";
import Container from "./feature/Container/Container";


function App() {
    return (
        <div className="App">
            <HeaderTop />
            <Nav />
            <Highlight />
            <News/>
            <Container />
        </div>
    );
}

export default App;
