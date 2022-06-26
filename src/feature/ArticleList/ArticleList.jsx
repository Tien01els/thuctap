import "./ArticleList.css";
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

function ArticleList() {
    return (
        <div className="ArticleList">
            {articles.map((article) => {
                return <ArticleItem image={article.image} title={article.title} description={article.description} />;
            })}
        </div>
    );
}

export default ArticleList;
