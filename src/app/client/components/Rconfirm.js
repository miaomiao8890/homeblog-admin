import React, { Component, PropTypes } from 'react';

export default class Rconfirm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { style, title, content, confirmBtn, cancelBtn, confirmCallback, cancelCallback, autoClose } = this.props;
    return (
      <div className="admin-confirm" style={style}>
        <div className="confirm-bg"></div>
        <div className="confirm-container">
          <h2 className="confirm-title">{title}</h2>
          <div className="confirm-content">
            {content}
            <div className="confirm-button">
              <button type="submit" className="btn btn-inverse" style={{display: confirmBtn ? 'inline-block' : 'none'}} onClick={confirmCallback}>确定</button>
              <button type="submit" className="btn" style={{display: cancelBtn ? 'inline-block' : 'none'}} onClick={cancelCallback}>取消</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}