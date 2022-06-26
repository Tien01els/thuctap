import "./App.css";
import HeaderTop from "./feature/HeaderTop/HeaderTop";
import Nav from "./feature/Nav/Nav";
import Highlight from "./feature/Highlight/Highlight";
import Container from "./feature/Container/Container";
import Footer from "./feature/Footer/Footer";
import ArticleColumnList from "./feature/ArticleColumnList/ArticleColumnList";

function App() {
    return (
        <div className="App">
            <HeaderTop />
            <Nav />
            <Highlight />
            <Container />
            <ArticleColumnList />
            <Footer />
        </div>
    );
}

export default App;
