import "./ArticleList.css";
import React, { Component } from 'react'
import ArticleItem from "../ArticleItem/ArticleItem.jsx";

export default class ArticleList extends Component {
    constructor() {
        super();
        this.state = {
          items: []
        };
      }

    async componentDidMount() {
        try {
          const response = await fetch(
            "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvnexpress.net%2Frss%2Ftin-moi-nhat.rss"
          );
          const json = await response.json();
          this.setState({ items: json.items });
        } catch (error) {
          console.log(error);
        }
    }

      render() {
        console.log(this.state);
        return (
          <div className="ArticleList">
            {this.state.items.map(item => (
                <ArticleItem key={item.guid} image={item.thumbnail} title={item.title} description={item.description.split("</a>")[1]} />
            ))}
          </div>
        );
      }
}
