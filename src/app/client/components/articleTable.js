import React, { Component } from 'react';

export default class ArticleTable extends Component {

  render() {
    const { contentHeader } = this.props;
    let products = [{
        id: 1,
        name: "Item name 1",
        price: 100
    },{
        id: 2,
        name: "Item name 2",
        price: 100
    }];
    function onRowSelect(row, isSelected){
      console.log(row);
      console.log("selected: " + isSelected)
    }

    function onSelectAll(isSelected){
      console.log("is select all: " + isSelected);
    }

    let selectRowProp = {
      mode: "checkbox",
      clickToSelect: true,
      bgColor: "rgb(238, 193, 213)",
      onSelect: onRowSelect,
      onSelectAll: onSelectAll
    };
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
                <th>Column name</th>
                <th>Column name</th>
                <th>Column name</th>
                <th>Column name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Row 1</td>
                <td>Row 2</td>
                <td>Row 3</td>
                <td>Row 4</td>
              </tr>
              <tr>
                <td>Row 1</td>
                <td>Row 2</td>
                <td>Row 3</td>
                <td>Row 4</td>
              </tr>
              <tr>
                <td>Row 1</td>
                <td>Row 2</td>
                <td>Row 3</td>
                <td>Row 4</td>
              </tr>
              <tr>
                <td>Row 1</td>
                <td>Row 2</td>
                <td>Row 3</td>
                <td>Row 4</td>
              </tr>
              <tr>
                <td>Row 1</td>
                <td>Row 2</td>
                <td>Row 3</td>
                <td>Row 4</td>
              </tr>
              <tr>
                <td>Row 1</td>
                <td>Row 2</td>
                <td>Row 3</td>
                <td>Row 4</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}