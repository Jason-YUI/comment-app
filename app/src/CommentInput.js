import React from 'react';

class CommentInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      content: ''
    }
  }

  handleUsernameChange(event) {
    this.setState({
      username: event.target.value
    });
  }

  handleContentChange(event) {
    this.setState({
      content: event.target.value
    });
  }

  hanldeSubmit() {
    if (this.props.onSubmit) {
      const {username, content} = this.state;
      this.props.onSubmit({username, content});
    }
  }

  render() {
    return (
      <div className="comment-input">
        <div className="comment-field">
          <span className="comment-field-name">用户名：</span>
          <div className="comment-field-input">
            <input
              value={this.state.username}
              onChange={this.handleUsernameChange.bind(this)}
            />
          </div>
        </div>
        <div className="comment-field">
          <span className="comment-field-name">评论框：</span>
          <div className="comment-field-input">
                        <textarea
                          value={this.state.content}
                          onChange={this.handleContentChange.bind(this)}
                        />
          </div>
        </div>
        <div className="comment-field-button">
          <button
            onClick={this.hanldeSubmit.bind(this)}>
            发布
          </button>
        </div>
      </div>
    )
  }
}

export default CommentInput;