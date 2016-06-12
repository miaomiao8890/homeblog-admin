import React, { Component } from 'react';

export default class Paginate extends Component {
  render() {
    return (
      <div className="fg-toolbar ui-toolbar ui-widget-header ui-corner-bl ui-corner-br ui-helper-clearfix">
        <div className="dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_full_numbers" id="DataTables_Table_0_paginate">
          <a tabindex="0" className="first ui-corner-tl ui-corner-bl fg-button ui-button ui-state-default ui-state-disabled" id="DataTables_Table_0_first">First</a>
          <a tabindex="0" className="previous fg-button ui-button ui-state-default ui-state-disabled" id="DataTables_Table_0_previous">Previous</a>
          <span>
            <a tabindex="0" className="fg-button ui-button ui-state-default ui-state-disabled">1</a>
            <a tabindex="0" className="fg-button ui-button ui-state-default">2</a>
            <a tabindex="0" className="fg-button ui-button ui-state-default">3</a>
            <a tabindex="0" className="fg-button ui-button ui-state-default">4</a>
            <a tabindex="0" className="fg-button ui-button ui-state-default">5</a>
          </span>
          <a tabindex="0" className="next fg-button ui-button ui-state-default" id="DataTables_Table_0_next">Next</a>
          <a tabindex="0" className="last ui-corner-tr ui-corner-br fg-button ui-button ui-state-default" id="DataTables_Table_0_last">Last</a>
        </div>
      </div>
    )
  }
}