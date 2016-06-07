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
    	
    )
  }
}