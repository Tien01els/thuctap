import "./Highlight.css";
import ArticleHighlight from "../ArticleHighlight/ArticleHighlight";
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

function Highlight() {
    return (
        <div className="Highlight">
            <div className="hightlight-special">
                <ArticleItem image={articles[1].image} title={articles[1].title} />
                <ArticleItem image={articles[2].image} title={articles[2].title} />
                <ArticleItem image={articles[3].image} title={articles[3].title} />
                <ArticleItem image={articles[0].image} title={articles[0].title} />
            </div>
            <ArticleHighlight />
        </div>
    );
}

export default Highlight;
