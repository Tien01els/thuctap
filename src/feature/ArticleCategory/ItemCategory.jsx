import ArticleItem from "../ArticleItem/ArticleItem.jsx";
import fetchRSS from "../fetchData/fetchData.jsx";
import React, { Component } from "react";

export default class ItemByArticleCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
        };
    }

    async componentDidMount() {
        const { category } = this.props;
        try {
            const json = await fetchRSS(category);
            this.setState({ items: json.items });
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <div className="content-category">
                {this.state.items.slice(0, 1).map((article) => (
                    <a href={article.link} key={article.guid}>
                        {article.thumbnail && <ArticleItem image={article.thumbnail} title={article.title} description={article.description.split("</a>")[1]} />}
                    </a>
                ))}
                <div className="content-category-list">
                    {this.state.items.slice(1, 3).map((article) => (
                        <a href={article.link} key={article.guid}>
                            {article.thumbnail && <ArticleItem image={article.thumbnail} title={article.title} />}
                        </a>
                    ))}
                </div>
            </div>
        );
    }
}
