import React, { Component } from 'react'

export default class News extends Component {
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
          <div>
            Check out our blog:
            {this.state.items.map(item => (
              <li key={item.guid}>
                <a target="_blank" rel="noopener noreferrer" href={item.link}>
                  {item.title}
                </a>
              </li>
            ))}
          </div>
        );
      }
}