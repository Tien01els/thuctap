import "./App.css";
import HeaderTop from "./feature/HeaderTop/HeaderTop";
import Nav from "./feature/Nav/Nav";
import ArticleHighlight from "./feature/ArticleHighlight/ArticleHighlight.jsx";
import Highlight from "./feature/Highlight/Highlight";
function App() {
    return (
        <div className="App">
            <HeaderTop />
            <Nav />
            <Highlight />
        </div>
    );
}

export default App;
