import React, { Component } from 'react';

export default class ArticleTable extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let trItem = this.props.articles.map(article => {
      return (
        <tr>
          <td>{article.title}</td>
          <td>{article.category}</td>
          <td>{article.previewimg}</td>
          <td>{article.summary}</td>
        </tr>
      )
    })
    return (
    	<div className="widget-box">
        <div className="widget-title">
          <span className="icon">
            <i className="icon-th"></i>
          </span>
          <h5>Static table</h5>
        </div>
        <div className="widget-content nopadding">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>文章标题</th>
                <th>分类</th>
                <th>图片名称</th>
                <th>概要</th>
              </tr>
            </thead>
            <tbody>
              {trItem}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}