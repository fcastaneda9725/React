import React, { PureComponent } from 'react';
import './media.css';
import PropTypes from 'prop-types';

class Media extends PureComponent {
  render(){
    const styles = {
      container: {
        color: '#44546b',
        cursor: 'pointer',
        width: 260,
        border: '1px solid red'
      }
    }
    return (
      <div className="Media" onClick={this.props.handleClick}>
        <div className="Media-cover">
          <img
              src={this.props.cover}
              alt=""
              width={260}
              height={160}
              className="Media-image"
            />
          <h3 className="Media-title">{this.props.title}</h3>
          <p className="Media-author">{this.props.author}</p>
        </div>
      </div>
    )
  }
}

Media.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string
}

export default Media;
