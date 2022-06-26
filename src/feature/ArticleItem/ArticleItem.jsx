import "./ArticleItem.css";

function ArticleItem({ image, title, description }) {
    return (
        <div className="ArticleItem">
            <div className="article-item-container">
                <img className="img-article-item" src={image} alt={title} />
                <p className="title-article-item">{title}</p>
                <p className="description-article-item">{description}</p>
            </div>
        </div>
    );
}

export default ArticleItem;
