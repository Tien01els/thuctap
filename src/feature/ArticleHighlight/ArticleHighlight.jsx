import "./ArticleHighlight.css";
import ArticleItem from "../ArticleItem/ArticleItem";

var articles = [
    {
        image: "https://static.zerochan.net/Genshin.Impact.full.3420945.jpg",
        title: "1. Ngọc Châu đăng quang Hoa hậu Hoàn vũ Việt Nam 2022",
        description: "1. Ukraine thừa nhận tư cách thành viên NATO không khả thi trong ngắn hạn, nhưng muốn liên minh thừa nhận Kiev là 'nền tảng' của an ninh châu Âu.",
    },
    {
        image: "https://static.zerochan.net/Genshin.Impact.full.3420945.jpg",
        title: "2 Ngọc Châu đăng quang Hoa hậu Hoàn vũ Việt Nam 2022",
        description: "2 Ukraine thừa nhận tư cách thành viên NATO không khả thi trong ngắn hạn, nhưng muốn liên minh thừa nhận Kiev là 'nền tảng' của an ninh châu Âu.",
    },
    {
        image: "https://static.zerochan.net/Genshin.Impact.full.3420945.jpg",
        title: "3 Ngọc Châu đăng quang Hoa hậu Hoàn vũ Việt Nam 2022",
        description: "3 Ukraine thừa nhận tư cách thành viên NATO không khả thi trong ngắn hạn, nhưng muốn liên minh thừa nhận Kiev là 'nền tảng' của an ninh châu Âu.",
    },
    {
        image: "https://static.zerochan.net/Genshin.Impact.full.3420945.jpg",
        title: "4 Ngọc Châu đăng quang Hoa hậu Hoàn vũ Việt Nam 2022",
        description: "4 Ukraine thừa nhận tư cách thành viên NATO không khả thi trong ngắn hạn, nhưng muốn liên minh thừa nhận Kiev là 'nền tảng' của an ninh châu Âu.",
    },
];


function ArticleHighlight() {
    return (
        <div className="ArticleHighlight">
            <div className="article-highlight-main">
                <ArticleItem image={articles[0].image} title={articles[0].title} description={articles[0].description} />
            </div>
            <div className="article-highlight-sub">
                <ArticleItem image={articles[1].image} title={articles[1].title} />
                <ArticleItem image={articles[2].image} title={articles[2].title} />
            </div>
        </div>
    );
}

export default ArticleHighlight;
