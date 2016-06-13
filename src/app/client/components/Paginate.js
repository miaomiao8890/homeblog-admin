import React, { Component } from 'react';

export default class Paginate extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentPage, totalPage, listLength, _handlePageChange } = this.props;
    let pageList = [];
    let pageNum = totalPage > 5 ? 5 : totalPage;
    for (var i = 1; i <= pageNum; i++) {
      if (totalPage > 5 && currentPage > 5) {
        pageList.push(currentPage-(5-i));
      } else {
        pageList.push(i);
      }
    };
    let pageItem = pageList.map(item => {
      let classname = item == currentPage ? 'ui-button ui-state-disabled' : 'ui-button';
      return (
        <a className={classname} data-page={item}>{item}</a>
      )
    })
    return (
      <div className="ui-toolbar ui-widget-header">
        <div className="dataTables_paginate" onClick={_handlePageChange}>
          <a className={`first ui-button ${currentPage == 1 ? 'ui-state-disabled' : ''}`} data-page="First">First</a>
          <a className={`ui-button ${currentPage == 1 ? 'ui-state-disabled' : ''}`} data-page="Previous">Previous</a>
          <span>
            { pageItem }
          </span>
          <a className={`ui-button ${currentPage == totalPage ? 'ui-state-disabled' : ''}`} data-page="Next">Next</a>
          <a className={`last ui-button ${currentPage == totalPage ? 'ui-state-disabled' : ''}`} data-page="Last">Last</a>
        </div>
      </div>
    )
  }
}