import React from 'react';
import PropTypes from 'prop-types';

// React component
class TweeterShareButton extends React.Component {
  constructor(props) {
    super(props);
    this.generateLink = this.generateLink.bind(this);
  }

  generateLink() {
    let link = 'https://twitter.com/intent/tweet';
    if (this.props.data) {
      link += `?text=${encodeURI(this.props.data)}`;
    }
    return link;
  }

  render() {
    return (
      <a 
        id="tweet-quote"
        href={this.generateLink()}
        className={'btn btn-info '.concat(this.props.className)}
        target="_blank"
        rel="noreferrer noopener"
      >
        Tweet quote
      </a>
    );
  }
}

// Props types
TweeterShareButton.propTypes = {
  data: PropTypes.string.isRequired
};

// Default props values
TweeterShareButton.defaultProps = {
  data: '',
  className: ''
};

export default TweeterShareButton;