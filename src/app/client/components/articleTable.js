import React, { Component } from 'react';
import Paginate from './Paginate';

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
          <td title={article.summary}>{article.summary}</td>
          <td className="taskOptions">
            <a href="#"><i className="icon-pencil"></i></a>
            <a href="#"><i className="icon-remove"></i></a>
          </td>
        </tr>
      )
    })
    return (
    	<div className="widget-box">
        <div className="widget-title">
          <span className="icon">
            <i className="icon-th"></i>
          </span>
          <h5>{this.props.tableTitle}</h5>
        </div>
        <div className="widget-content nopadding">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th width="20%">文章标题</th>
                <th width="5%">分类</th>
                <th width="20%">图片名称</th>
                <th width="50%">概要</th>
                <th width="5%">操作</th>
              </tr>
            </thead>
            <tbody>
              {trItem}
            </tbody>
          </table>
          <Paginate />
        </div>
      </div>
    )
  }
}