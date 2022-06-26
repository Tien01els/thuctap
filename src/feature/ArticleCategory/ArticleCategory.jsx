import "./ArticleCategory.css";
import ItemByArticleCategory from "./ItemCategory";
import { CATEGORY } from "../constants";

function ArticleCategory() {
  return (
    <div className="ArticleCategory">
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
          <h3>Kinh doanh</h3>
          <span>Quốc tế</span>
          <span>Chứng khoán</span>
          <span>Bất động sản</span>
          <span>Bảo hiểm</span>
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
        <ItemByArticleCategory category={CATEGORY.CAR} />
      </div>
      
      <div className="article-category">
        <div className="tittle-category">
          <h3>Kinh doanh</h3>
          <span>Quốc tế</span>
          <span>Chứng khoán</span>
          <span>Bất động sản</span>
          <span>Bảo hiểm</span>
        </div>
        <ItemByArticleCategory category={CATEGORY.ENTERTAIN} />
      </div>
      
      <div className="article-category">
        <div className="tittle-category">
          <h3>Kinh doanh</h3>
          <span>Quốc tế</span>
          <span>Chứng khoán</span>
          <span>Bất động sản</span>
          <span>Bảo hiểm</span>
        </div>
        <ItemByArticleCategory category={CATEGORY.SPORT} />
      </div>
      
      <div className="article-category">
        <div className="tittle-category">
          <h3>Kinh doanh</h3>
          <span>Quốc tế</span>
          <span>Chứng khoán</span>
          <span>Bất động sản</span>
          <span>Bảo hiểm</span>
        </div>
        <ItemByArticleCategory category={CATEGORY.WORLD} />
      </div>
    </div>
  );
}

export default ArticleCategory;
