import React, { Component } from 'react'
import "./Highlight.css";
import ArticleHighlight from "../ArticleHighlight/ArticleHighlight";
import ArticleItem from "../ArticleItem/ArticleItem.jsx";
import fetchRSS from "../fetchData/fetchData";

export default class Highlight extends Component {
    constructor() {
        super();
        this.state = {
            items: [],
        };
    }

    async componentDidMount() {
        try {
            const json = await fetchRSS('tin-noi-bat.rss');
            this.setState({ items: json.items });
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <div className="Highlight">
                <div className="hightlight-special">
                    {this.state.items.slice(0,4).map((item) => (
                        <a href={item.link} key={item.guid}>
                            {item.thumbnail && <ArticleItem key={item.guid} image={item.thumbnail} title={item.title} />}
                        </a>
                    ))}
                </div>
                <ArticleHighlight />
            </div>
        )
    }
}