import "./Container.css";
import ArticleList from "../ArticleList/ArticleList";
import ArticleCategory from "../ArticleCategory/ArticleCategory";

function Container() {
    return (
        <div className="Container">
            <div className="content">
                <ArticleList />
                <ArticleCategory />
            </div>
        </div>
    );
}

export default Container;
