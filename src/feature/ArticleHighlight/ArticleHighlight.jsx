import React, { Component } from "react";
import "./ArticleHighlight.css";
import ArticleItem from "../ArticleItem/ArticleItem";
import fetchRSS from "../fetchData/fetchData";

export default class ArticleHighlight extends Component {
    constructor() {
        super();
        this.state = {
            items: [],
        };
    }

    async componentDidMount() {
        try {
            const json = await fetchRSS("tin-xem-nhieu.rss");
            this.setState({ items: json.items });
        } catch (error) {
            console.log(error);
        }
    }
    render() {
        return (
            <div className="ArticleHighlight">
                <div className="article-highlight-main">
                    {this.state.items.slice(0, 1).map((item) => (
                        <a href={item.link} key={item.guid}>
                            {item.thumbnail && <ArticleItem key={item.guid} image={item.thumbnail} title={item.title} description={item.description.split("</a>")[1]} />}
                        </a>
                    ))}
                </div>
                <div className="article-highlight-sub">
                    {this.state.items.slice(1, 3).map((item) => (
                        <a href={item.link} key={item.guid}>
                            {item.thumbnail && <ArticleItem key={item.guid} image={item.thumbnail} title={item.title} />}
                        </a>
                    ))}
                </div>
            </div>
        );
    }
}
