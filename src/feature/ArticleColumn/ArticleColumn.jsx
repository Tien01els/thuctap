import "./ArticleColumn.css";
import React, { Component } from "react";
import ArticleItem from "../ArticleItem/ArticleItem.jsx";
import fetchRSS from "../fetchData/fetchData";

export default class ArticleColumn extends Component {
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
            <div className="ArticleColumn">
                <div className="article-column-main">
                    {this.state.items.slice(0, 1).map((item) => (
                        <a href={item.link} key={item.guid}>
                            {item.thumbnail && <ArticleItem key={item.guid} image={item.thumbnail} title={item.title} />}
                        </a>
                    ))}
                </div>
                <div className="article-column-sub">
                    {this.state.items.slice(1, 4).map((item) => (
                        <a href={item.link} key={item.guid}>
                            {item.thumbnail && <ArticleItem key={item.guid} image={item.thumbnail} title={item.title} />}
                        </a>
                    ))}
                </div>
            </div>
        );
    }
}
