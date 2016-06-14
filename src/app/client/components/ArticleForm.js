import React, { Component } from 'react';

export default class ArticleForm extends Component {
	constructor(props) {
    super(props);
  }
  render() {
  	return (
  		<form className="form-horizontal">
				<div className="control-group">
					<label className="control-label">文章标题</label>
					<div className="controls">
						<input type="text" />
					</div>
				</div>
				<div className="control-group">
					<label className="control-label">分类</label>
					<div className="controls">
						<input type="text" />
					</div>
				</div>
				<div className="control-group">
					<label className="control-label">预览图片地址</label>
					<div className="controls">
						<input type="text" />
					</div>
				</div>
				<div className="control-group">
					<label className="control-label">概要</label>
					<div className="controls">
						<input type="text" />
					</div>
				</div>
				<div className="control-group">
					<label className="control-label">内容</label>
					<div className="controls">
						<textarea></textarea>
					</div>
				</div>
				<div className="form-actions">
					<button type="submit" className="btn btn-primary">Save</button>
				</div>
			</form>
  	)
  }
}
