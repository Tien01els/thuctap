import "./ArticleList.css";
import React, { Component } from 'react'
import ArticleItem from "../ArticleItem/ArticleItem.jsx";
import fetchRSS from "../fetchData/fetchData";
import { CATEGORY } from "../constants";

export default class ArticleList extends Component {
    constructor() {
        super();
        this.state = {
          items: []
        };
      }

    async componentDidMount() {
        try {
          const json = await fetchRSS(CATEGORY.HOME);
          this.setState({ items: json.items });
        } catch (error) {
          console.log(error);
        }
    }

    render() {
      return (
        <div className="ArticleList">
          {this.state.items.map(item => (
            <a href={item.link}>
              {item.thumbnail && <ArticleItem key={item.guid} image={item.thumbnail} title={item.title} description={item.description.split("</a>")[1]} />}
            </a>
          ))}
        </div>
      );
    }
}
