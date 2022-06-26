import "./ArticleItem.css";

function ArticleItem({ image, title, description }) {
    return (
        <div className="ArticleItem">
            <div className="article-item-container">
                <img className="img-article-item" src={image} alt={title} />
                <div className="content-article-item">
                    <p className="title-article-item">{title}</p>
                    <p className="description-article-item">{description}</p>
                </div>
            </div>
        </div>
    );
}

export default ArticleItem;
