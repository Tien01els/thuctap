import "./ArticleColumnList.css";
import ArticleColumn from "../ArticleColumn/ArticleColumn.jsx";

function ArticleColumnList() {
    return (
        <div className="ArticleColumnList">
            <div className="article-column">
                <h2>Pháp luật</h2>
                <div className="article-category-column">
                    <span>Hồ sơ vụ án</span>
                    <span>Pháp đình</span>
                </div>
                <ArticleColumn category={"phap-luat.rss"} />
            </div>
            <div className="article-column">
                <h2>Du lịch</h2>
                <div className="article-category-column">
                    <span>Điểm đẹp</span>
                    <span>Món ngon</span>
                </div>
                <ArticleColumn category={"du-lich.rss"} />
            </div>
            <div className="article-column">
                <h2>Khoa học</h2>
                <div className="article-category-column">
                    <span>Vũ trụ</span>
                    <span>Khám phá</span>
                </div>
                <ArticleColumn category={"khoa-hoc.rss"} />
            </div>
            <div className="article-column">
                <h2>Đời sống</h2>
                <div className="article-category-column">
                    <span>Cộng đồng</span>
                    <span>Nhà đẹp</span>
                </div>
                <ArticleColumn category={"gia-dinh.rss"} />
            </div>
        </div>
    );
}

export default ArticleColumnList;
