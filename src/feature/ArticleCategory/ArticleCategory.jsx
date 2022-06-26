import "./ArticleCategory.css";
import ItemByArticleCategory from "./ItemCategory";
import { CATEGORY } from "../constants";

function ArticleCategory() {
    return (
        <div className="ArticleCategory">
            <div className="article-category">
                <div className="tittle-category">
                    <h3>Thời sự</h3>
                    <span>Chính trị</span>
                    <span>Lao động - việc làm</span>
                    <span>Dân sinh</span>
                </div>
                <ItemByArticleCategory category={CATEGORY.NEWS} />
            </div>
            
            <div className="article-category">
                <div className="tittle-category">
                    <h3>Kinh doanh</h3>
                    <span>Quốc tế</span>
                    <span>Chứng khoán</span>
                    <span>Bất động sản</span>
                    <span>Bảo hiểm</span>
                </div>
                <ItemByArticleCategory category={CATEGORY.BUSINESS} />
            </div>

            <div className="article-category">
                <div className="tittle-category">
                    <h3>Giải trí</h3>
                    <span>Giới sao</span>
                    <span>Phim</span>
                    <span>Nhạc</span>
                    <span>Thời trang</span>
                    <span>Sách</span>
                </div>
                <ItemByArticleCategory category={CATEGORY.ENTERTAIN} />
            </div>

            <div className="article-category">
                <div className="tittle-category">
                    <h3>Thể thao</h3>
                    <span>Bóng đá</span>
                    <span>Lịch thi đấu</span>
                    <span>Tennis</span>
                    <span>VM 2022</span>
                    <span>V-Race</span>
                    <span>V-League</span>
                </div>
                <ItemByArticleCategory category={CATEGORY.SPORT} />
            </div>
        </div>
    );
}

export default ArticleCategory;
