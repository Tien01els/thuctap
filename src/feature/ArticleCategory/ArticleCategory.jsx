import "./ArticleCategory.css";
import ArticleItem from "../ArticleItem/ArticleItem.jsx";

var articles = [
    {
        image: "https://static.zerochan.net/Genshin.Impact.full.3420945.jpg",
        title: "11 Ngọc Châu đăng quang Hoa hậu Hoàn vũ Việt Nam 2022",
        description: "11 Ukraine thừa nhận tư cách thành viên NATO không khả thi trong ngắn hạn, nhưng muốn liên minh thừa nhận Kiev là 'nền tảng' của an ninh châu Âu.",
    },
    {
        image: "https://static.zerochan.net/Genshin.Impact.full.3420945.jpg",
        title: "12 Ngọc Châu đăng quang Hoa hậu Hoàn vũ Việt Nam 2022",
        description: "12 Ukraine thừa nhận tư cách thành viên NATO không khả thi trong ngắn hạn, nhưng muốn liên minh thừa nhận Kiev là 'nền tảng' của an ninh châu Âu.",
    },
    {
        image: "https://static.zerochan.net/Genshin.Impact.full.3420945.jpg",
        title: "13 Ngọc Châu đăng quang Hoa hậu Hoàn vũ Việt Nam 2022",
        description: "13 Ukraine thừa nhận tư cách thành viên NATO không khả thi trong ngắn hạn, nhưng muốn liên minh thừa nhận Kiev là 'nền tảng' của an ninh châu Âu.",
    },
    {
        image: "https://static.zerochan.net/Genshin.Impact.full.3420945.jpg",
        title: "14 Ngọc Châu đăng quang Hoa hậu Hoàn vũ Việt Nam 2022",
        description: "14 Ukraine thừa nhận tư cách thành viên NATO không khả thi trong ngắn hạn, nhưng muốn liên minh thừa nhận Kiev là 'nền tảng' của an ninh châu Âu.",
    },
];

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
                <div className="content-category">
                    <ArticleItem image={articles[0].image} title={articles[0].title} description={articles[0].description} />
                    <div className="content-category-list">
                        <ArticleItem image={articles[0].image} title={articles[0].title} />
                        <ArticleItem image={articles[0].image} title={articles[0].title} />
                        <ArticleItem image={articles[0].image} title={articles[0].title} />
                    </div>
                </div>
            </div>

            <div className="article-category">
                <div className="tittle-category">
                    <h3>Kinh doanh</h3>
                    <span>Quốc tế</span>
                    <span>Chứng khoán</span>
                    <span>Bất động sản</span>
                    <span>Bảo hiểm</span>
                </div>
                <div className="content-category">
                    <ArticleItem image={articles[0].image} title={articles[0].title} description={articles[0].description} />
                    <div className="content-category-list">
                        <ArticleItem image={articles[0].image} title={articles[0].title} />
                        <ArticleItem image={articles[0].image} title={articles[0].title} />
                        <ArticleItem image={articles[0].image} title={articles[0].title} />
                    </div>
                </div>
            </div>

            <div className="article-category">
                <div className="tittle-category">
                    <h3>Kinh doanh</h3>
                    <span>Quốc tế</span>
                    <span>Chứng khoán</span>
                    <span>Bất động sản</span>
                    <span>Bảo hiểm</span>
                </div>
                <div className="content-category">
                    <ArticleItem image={articles[0].image} title={articles[0].title} description={articles[0].description} />
                    <div className="content-category-list">
                        <ArticleItem image={articles[0].image} title={articles[0].title} />
                        <ArticleItem image={articles[0].image} title={articles[0].title} />
                        <ArticleItem image={articles[0].image} title={articles[0].title} />
                    </div>
                </div>
            </div>

            <div className="article-category">
                <div className="tittle-category">
                    <h3>Kinh doanh</h3>
                    <span>Quốc tế</span>
                    <span>Chứng khoán</span>
                    <span>Bất động sản</span>
                    <span>Bảo hiểm</span>
                </div>
                <div className="content-category">
                    <ArticleItem image={articles[0].image} title={articles[0].title} description={articles[0].description} />
                    <div className="content-category-list">
                        <ArticleItem image={articles[0].image} title={articles[0].title} />
                        <ArticleItem image={articles[0].image} title={articles[0].title} />
                        <ArticleItem image={articles[0].image} title={articles[0].title} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ArticleCategory;
