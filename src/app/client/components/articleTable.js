import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';
import Paginate from './Paginate';

export default class ArticleTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1
    };
    this._handlePageChange = this._handlePageChange.bind(this);
  }
  _handlePageChange(evt) {
    let page = evt.target.dataset.page;
    switch(page) {
      case 'First':
        this.setState({currentPage: 1});
        break;
      case 'Previous':
        if (this.state.currentPage > 1) {
          this.setState({currentPage: this.state.currentPage - 1});
        }
        break;
      case 'Next':
        if (this.state.currentPage < this.props.totalPage) {
          this.setState({currentPage: this.state.currentPage + 1});
        }
        break;
      case 'Last':
        this.setState({currentPage: this.props.totalPage});
        break;
      default:
        this.setState({currentPage: parseInt(page)});
        break;
    }
  }
  render() {
    const { perPage, articles, totalPage, handleDelete } = this.props;
    let items = articles.slice((this.state.currentPage - 1) * perPage, this.state.currentPage * perPage);
    let trItem = items.map(article => {
      return (
        <tr key={article._id}>
          <td>{article.title}</td>
          <td>{article.category}</td>
          <td>{article.previewimg}</td>
          <td title={article.summary}>{article.summary}</td>
          <td className="taskOptions">
            <Link to={`/admin/article/edit/${article._id}`}><i className="icon-pencil"></i></Link>
            <a><i className="icon-remove" onClick={handleDelete} data-id={article._id}></i></a>
          </td>
        </tr>
      )
    })
    return (
      <div>
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
        <Paginate currentPage={this.state.currentPage} totalPage={totalPage} listLength={articles.length} handlePageChange={this._handlePageChange} />
      </div>
    )
  }
}

ArticleTable.propTypes = {
  perPage: PropTypes.number.isRequired,
  articles: PropTypes.array.isRequired,
  totalPage: PropTypes.number.isRequired,
  handleDelete: PropTypes.func.isRequired
}